import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))

}