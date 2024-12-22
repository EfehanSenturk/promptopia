import mongoose from "mongoose";

let isConnect = false; //track the connection status

export const connnectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnect) {
    console.log("MongoDB is already connected ");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    });
    isConnect = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
