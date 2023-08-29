import express from "express";
import userRoutes from "./user-routes";
import soldRecordsRoutes from "./sold-records-routes";
import purchaseRecordsRoutes from "./purchase-records-routes";

const router = express.Router();


router.use("/users", userRoutes);
router.use("/sold-records", soldRecordsRoutes);
router.use("/purchase-records", purchaseRecordsRoutes);


export default router;
