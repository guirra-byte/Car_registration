import 'reflect-metadata';
import 'express-async-errors';

import { app } from './app';
import { AppError } from './Errors/AppError';

import { Response, Request, NextFunction } from 'express';

import { categoryRoutes } from './Routes/Category.routes';
import { userRoutes } from './Routes/User.routes';
import { authRoutes } from './Routes/Auth.routes';

app.use("/category", categoryRoutes);

app.use("/user", userRoutes);

app.use(authRoutes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

  if (err instanceof AppError) {

    return response
      .status(err.statusCode)
      .json({ message: err.message });
  }

  return response
    .status(500)
    .json({ message: `Internal server error - ${err.message}` });
});

const PORT = 3311;

app.listen(PORT, () => {

  console.log("O Server já está rodando --- 😎🎃💜");

});