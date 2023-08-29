import express from "express";
import cors from "cors";
import { ServerConfig, DatabaseConfig } from "./config";
import apiRoutes from "./routes";

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", apiRoutes);


app.listen(ServerConfig.PORT, async () => {
    console.log("Server started @ PORT", ServerConfig.PORT);
    await DatabaseConfig.connectToDatabase();
});