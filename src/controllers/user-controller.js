import { StatusCodes } from "http-status-codes";
import { ErrorResponse, SuccessResponse } from "../utils/errors";
import { UserService } from "../services";


async function signup(req, res) {
    try {
        const { name, email, password } = req.body;

        const user = await UserService.signup({ name, email, password });

        SuccessResponse.message = "Successfully created the user";
        SuccessResponse.data = user;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while creating the user";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


async function signin(req, res) {
    try {
        const { email, password } = req.body;

        const token = await UserService.signin({ email, password });

        SuccessResponse.message = "Successfully signedin the user";
        SuccessResponse.data = { token };

        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = "Something went wrong while signing in";
        ErrorResponse.error = error; // this error object is (AppError) object

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


export default {
    signup,
    signin
}