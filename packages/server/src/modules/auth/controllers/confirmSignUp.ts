import { Request, Response, RequestHandler } from 'express';
import { getManager } from 'typeorm';

import User from 'modules/user/entity';
import Token from 'modules/auth/entity';
import { verifyToken } from 'modules/auth/sign';
import { Status } from 'modules/auth/enums';

interface ConfirmSignUpPayload {
  tokenId: string;
}

interface ConfirmSignUpRequest extends Request {
  body: ConfirmSignUpPayload;
}

const confirmSignUp: RequestHandler = async (
  req: ConfirmSignUpRequest,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const { tokenId } = body;

  try {
    const token = await Token.findOne({ id: tokenId });

    if (!token) {
      throw new Error('no token');
    }

    const { token: jwtToken } = token;

    const payload = verifyToken(jwtToken, {
      ignoreExpiration: true
    });

    const { exp, userId: id } = payload;

    if (Date.now() >= exp * 1000) {
      throw new Error('Link has expired');
    }

    await getManager().update(
      User,
      { id, status: Status.Registered },
      { activeAt: new Date(), status: Status.Active }
    );

    await Token.delete({ id: tokenId });
  } catch (error) {
    console.error(error);

    return res.sendStatus(400);
  }

  return res.sendStatus(202);
};

export default confirmSignUp;
