import express from "express";
import { SoldRecordsMiddleware, UserMiddleware } from "../../middlewares";
import { SoldRecordsController } from "../../controllers";


const router = express.Router();


router.post(
    "/",
    UserMiddleware.authenticateUser,
    SoldRecordsMiddleware.validateCreateSoldRecordsRequest,
    SoldRecordsController.create
);


router.get(
    "/",
    UserMiddleware.authenticateUser,
    SoldRecordsController.getSoldRecordsByUserId
);

router.get(
    "/:recordId",
    UserMiddleware.authenticateUser,
    SoldRecordsController.getSoldRecordsByUserIdAndRecordId
);


export default router;