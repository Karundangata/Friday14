import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(bodyParser.json());


app.use('/api', productRoutes);


app.use((err: any, req: any, res: any, next: any) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

export default app;
