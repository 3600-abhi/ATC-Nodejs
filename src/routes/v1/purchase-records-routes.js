import express from "express";
import { PurchaseRecordsMiddleware, UserMiddleware } from "../../middlewares";
import { PurchaseRecordsController } from "../../controllers";


const router = express.Router();


router.post(
    "/",
    UserMiddleware.authenticateUser,
    PurchaseRecordsMiddleware.validateCreatePurchaseRequest,
    PurchaseRecordsController.create
);



export default router;