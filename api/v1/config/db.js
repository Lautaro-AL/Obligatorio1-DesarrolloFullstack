import mongoose from "mongoose";

const conectDB = async () => {
  try {
    mongoose.connect(
      process.env.NODE_ENV === "development"
        ? process.env.MONGO_URI_DEV
        : process.env.MONGO_URI
    );
    console.log("BD conectada");
  } catch {
    console.error("Error al conectar bd: ", error);
  }
};

export default conectDB;
