import express from "express";
import userRoutes from "./user-routes";
import soldRecordsRoutes from "./sold-records-routes";

const router = express.Router();


router.use("/users", userRoutes);
router.use("/sold-records", soldRecordsRoutes);


export default router;
