import dotenv from 'dotenv';


dotenv.config({ path: '.env' });
import connectDB from './db/index.js';

console.log(process.env.MONGODB_URI)

 
connectDB()