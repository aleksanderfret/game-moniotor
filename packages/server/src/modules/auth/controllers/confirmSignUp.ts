import { Request, Response, RequestHandler } from 'express';

const confirmSignUp: RequestHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).send({});
};

export default confirmSignUp;
