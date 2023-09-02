import mongoose from "mongoose";
let isconnected = false; //track connection

export const connecttoDB = async () => {
  mongoose.set("strictQuery", true);

  if (isconnected) {
    console.log("MongoDB connected already");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isconnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
