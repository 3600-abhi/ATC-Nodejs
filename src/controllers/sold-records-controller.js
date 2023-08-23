import { StatusCodes } from "http-status-codes";
import { ErrorResponse, SuccessResponse } from "../utils/errors";
import { SoldRecordsService } from "../services";


async function create(req, res) {
    try {
        const soldRecord = await SoldRecordsService.create(req.body);

        SuccessResponse.message = "Successfully created the user";
        SuccessResponse.data = soldRecord;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while creating the sold record";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


async function getSoldRecordsByUserId(req, res) {
    try {
        const { userId } = req.body;

        const soldRecords = await SoldRecordsService.getSoldRecordsByUserId(userId);

        SuccessResponse.message = "Successfully get the sold records";
        SuccessResponse.data = soldRecords;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while getting the sold records";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


export default {
    create,
    getSoldRecordsByUserId
}