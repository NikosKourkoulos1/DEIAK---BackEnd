require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();
app.use(express.json()); 


console.log('MONGO_URI:', process.env.MONGO_URI);


mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB();

app.get('/', (req, res) => {
    res.send('Back End Up and Running!');
  });
  
app.use('/api/auth', authRoutes);


module.exports = app;
