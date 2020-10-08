import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productsRoute.js';
import colors from 'colors';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(process.env.PORT || 4444, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} port ${process.env.PORT}`.yellow
      .bold
  );
});
