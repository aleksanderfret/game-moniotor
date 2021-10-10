import { Request, Response, RequestHandler } from 'express';

const signUp: RequestHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).send({});
};

export default signUp;
