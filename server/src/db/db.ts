import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constant";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI as string;
export const connectdb = async () => {
    try {
        if (!MONGO_URI) {
            throw new Error(" MONGO_URI is not defined in .env");
        }
        await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
        console.log(`Connected to MongoDB: ${DB_NAME}`)
        
    } catch (error) {
        console.error(" MongoDB connection failed:", error);
        process.exit(1);
    }
}
