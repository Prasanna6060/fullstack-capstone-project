import express from 'express';
import 'dotenv/config.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT;
console.log(PORT);

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("Connected to db")
}).catch((err) => {
    console.log(err)
})

app.listen(PORT, ()=> {
    console.log(`Server is running in port ${PORT}`)
});



