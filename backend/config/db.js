import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sandhyanigwal9:0642@cluster0.jkguill.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
