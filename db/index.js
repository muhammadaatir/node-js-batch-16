import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
import dns from 'node:dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);
const url = process.env.MONGODB_URI

mongoose.connect(url)

export default mongoose;