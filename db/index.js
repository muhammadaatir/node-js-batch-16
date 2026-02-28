import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@smit-batch-16.dq5ptcq.mongodb.net/?appName=${process.env.DB_NAME}`

mongoose.connect(url)

export default mongoose;