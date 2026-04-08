import express from 'express';
import ProductRoute from './routes/ProductRoute.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', ProductRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});