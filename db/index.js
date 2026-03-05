import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
import dns from 'node:dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@smit-batch-16.dq5ptcq.mongodb.net/?appName=${process.env.DB_NAME}`

mongoose.connect(url)

export default mongoose;