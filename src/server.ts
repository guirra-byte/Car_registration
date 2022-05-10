import 'reflect-metadata';

import { app } from './app';
import { carRoutes } from './Routes/Car.routes';
import { categoryRoutes } from './Routes/Category.routes';
import { userRoutes } from './Routes/User.routes'

const PORT = 3311;

app.use("/car", carRoutes);

app.use("/category", categoryRoutes);

app.use("/user", userRoutes);

app.listen(PORT, () => {

  console.log("O Server já está rodando --- 😎🎃💜");

});