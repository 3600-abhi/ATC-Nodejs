import mongoose from "mongoose";
import { ServerConfig } from "./index";

async function connectToDatabase() {
    try {
        await mongoose.connect(ServerConfig.MONGODB_URI);
        console.log("Successfully connected with database");
    } catch (error) {
        console.log(error);
    }
}

export default {
    connectToDatabase
};