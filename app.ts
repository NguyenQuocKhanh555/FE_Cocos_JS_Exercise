import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import ProductRoute from './routes/ProductRoute.ts';
import UserRoute from './routes/UserRoute.ts';
import AuthRoute from './routes/AuthRoute.ts';
import CartRoute from './routes/CartRoute.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', AuthRoute);
app.use('/api', ProductRoute);
app.use('/api', UserRoute);
app.use('/api', CartRoute);

app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});