import { StatusCodes } from "http-status-codes";
import { ErrorResponse, AppError } from "../utils/errors";
import { Enums } from "../utils/common";



function validateCreatePurchaseRequest(req, res, next) {
    const {
        seller_name,
        goods_name,
        bundle_weight_in_kg,
        number_of_bundles,
        remaining_weight_in_kg,
        net_goods_weight_in_kg,
        price_per_quintal,
        goods_cost,
        labour_cost,
        payable_amount,
    } = req.body;

    if (seller_name === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["seller name is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (goods_name === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["goods name is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (!Object.keys(Enums.GOODS_NAME).includes(goods_name)) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Invalid goods name present in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (bundle_weight_in_kg === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["bundle weight is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }


    if (number_of_bundles === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["number of bundles is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (remaining_weight_in_kg === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["remaining weight is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (net_goods_weight_in_kg === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["net goods weight is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }


    if (price_per_quintal === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Price is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (goods_cost === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["goods cost is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (labour_cost === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["labour cost is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (payable_amount === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["payable amount is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}


function validateGetUsingDateWithRecentTimeOrder(req, res) {
    const { date } = req.body;

    if (date === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Date is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

export default {
    validateCreatePurchaseRequest,
    validateGetUsingDateWithRecentTimeOrder
}