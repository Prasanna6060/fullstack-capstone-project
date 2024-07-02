import express from 'express';
import 'dotenv/config.js';
import mongoose from 'mongoose';
import cors from 'cors';

import giftRouter from './routes/gift.routes.js';

const app = express();
const PORT = process.env.PORT;
console.log(PORT);

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("Connected to db")
}).catch((err) => {
    console.log(err)
})

app.use(express.json());
app.use(cors());

app.use('/api/gifts', giftRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running in port ${PORT}`)
});



