import { Request, Response, RequestHandler } from 'express';

const signIn: RequestHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).send({});
};

export default signIn;
