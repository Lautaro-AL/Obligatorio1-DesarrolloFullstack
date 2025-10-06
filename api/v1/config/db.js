import mongoose from "mongoose";

const conectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI_DEV);
    console.log("BD conectada");
  } catch {
    console.error("Error al conectar bd: ", error);
  }
};

export default conectDB;
