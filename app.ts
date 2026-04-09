import express from 'express';
import ProductRoute from './routes/ProductRoute.ts';
import UserRoute from './routes/UserRoute.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', ProductRoute);
app.use('/api', UserRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});