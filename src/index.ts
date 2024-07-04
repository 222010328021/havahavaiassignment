import 'reflect-metadata';
import { AppDataSource } from './data-source';
import express from 'express';
import airportRouter from './routes/airport';

const app = express();

AppDataSource.initialize().then(async () => {
  console.log('Data Source has been initialized!');
  app.use('/api/airport', airportRouter);
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((error) => console.log(error));
