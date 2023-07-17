import express from "express";

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRouter from "./routes/productRoutes.js";
dotenv.config();


connectDB();

const port = process.env.PORT || 5001
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRouter)



app.listen(port, () => console.log(`Server running on port ${port}`));