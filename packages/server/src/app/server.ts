import http from 'http';
import express from 'express';

import startApp from './app';
import environment from 'env/environment';
import { connectDB } from 'db/db';

const { PORT } = environment;

const startServer = async () => {
  await connectDB();

  const app = await startApp(express());

  const server = http.createServer(app);

  server.listen(PORT);

  console.info(`"Games Room" server is running on port ${PORT}`);
};

export default startServer;
