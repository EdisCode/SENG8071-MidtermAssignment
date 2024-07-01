import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bookRoutes from './routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

createConnection().then(() => {
  console.log('Connected to the database');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => console.log('Error: ', error));