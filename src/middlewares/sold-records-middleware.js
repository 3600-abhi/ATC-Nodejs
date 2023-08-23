import { StatusCodes } from "http-status-codes";
import { ErrorResponse, AppError } from "../utils/errors";


function validateCreateSoldRecordsRequest(req, res, next) {
    const {
        firm_name,
        vehicle_registration_number,
        vehicle_unloaded_weight,
        vehicle_loaded_weight,
        broker_name,
        goods_name,
        goods_price_per_quintal,
        number_of_bundles,
    } = req.body;

    if (firm_name === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["firm name is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (vehicle_registration_number === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["vehicle registration number is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (vehicle_unloaded_weight === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["vehicle unloaded weight is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (vehicle_loaded_weight === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["vehicle loaded weight is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (broker_name === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["broker name is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (goods_name === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["goods name is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (goods_price_per_quintal === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["goods price per quintal is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (number_of_bundles === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["number of bundles is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }


    next();
}



export default {
    validateCreateSoldRecordsRequest
}