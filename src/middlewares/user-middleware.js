import { StatusCodes } from "http-status-codes";
import { ErrorResponse, AppError } from "../utils/errors";
import { UserService } from "../services";


function validateSignupRequest(req, res, next) {
    const { name, email, password } = req.body;

    if (name === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Name is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (email === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Email is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (password === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Password is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}


function validateSigninRequest(req, res, next) {
    const { email, password } = req.body;

    if (email === undefined) {
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
            ["Email is missing in incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (password === undefined) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = new AppError(
            ["Password is missing in the incoming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}


async function authenticateUser(req, res, next) {
    try {

        if (req.headers["x-access-token"] === undefined) {
            ErrorResponse.message = "Something went wrong";
            ErrorResponse.error = new AppError(
                ["Token is missing in header of incoming request"],
                StatusCodes.BAD_REQUEST
            );

            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        
        const token = req.headers["x-access-token"];

        const userId = await UserService.authenticateUser(token);

        if (userId) {
            req.body.userId = userId;
            next();
        }

    } catch (error) {
        console.log(error);

        ErrorResponse.error = error; // this error object is (AppError) object
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


export default {
    validateSignupRequest,
    validateSigninRequest,
    authenticateUser
}