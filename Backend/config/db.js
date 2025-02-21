import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb+srv://Uvajanani:uvajanani012318@education-cluster.lgmmz.mongodb.net/?retryWrites=true&w=majority&appName=Education-Cluster").then(() => console.log("DB Connected"))
}