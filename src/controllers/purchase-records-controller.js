import { StatusCodes } from "http-status-codes";
import { ErrorResponse, SuccessResponse } from "../utils/errors";
import { PurchaseRecordsService } from "../services";


async function create(req, res) {
    try {
        const purchaseRecord = await PurchaseRecordsService.create(req.body);

        SuccessResponse.message = "Successfully created the purchase record";
        SuccessResponse.data = purchaseRecord;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while creating the purchase record";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getUsingDateWithRecentTimeOrder(req, res) {
    try {
        const { userId } = req.body;
        const { date } = req.params;

        const purchaseRecords = await PurchaseRecordsService.getUsingDateWithRecentTimeOrder({ userId, date });

        SuccessResponse.message = "Successfully fetched the purchase records";
        SuccessResponse.data = purchaseRecords;

        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong fetching the purchase records";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


export default {
    create,
    getUsingDateWithRecentTimeOrder
}