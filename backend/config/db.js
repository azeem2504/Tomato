import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect("mongodb+srv://arshilazeem5:eaHds014TJoylqtH@cluster0.bzij6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("DB Connected"))

}