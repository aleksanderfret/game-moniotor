import { rest } from 'msw';

export const handlers = [
  rest.post('http//localhost:5000/login', (_, res, ctx) => {
    return res(ctx.json({ token: '123' }));
  })
];
