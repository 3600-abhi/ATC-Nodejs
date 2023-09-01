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

router.get(
    "/date-wise/:date",
    UserMiddleware.authenticateUser,
    PurchaseRecordsMiddleware.validateGetDateWiseRequest,
    PurchaseRecordsController.getDateWise
);


router.delete(
    "/:id",
    UserMiddleware.authenticateUser,
    PurchaseRecordsController.destroy
);


export default router;