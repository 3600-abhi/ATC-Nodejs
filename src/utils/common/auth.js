import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { AppError } from "../errors";
import { ServerConfig } from "../../config";


function validatePassword(plainPassword, encryptedPassword) {
    try {
        return bcrypt.compareSync(plainPassword, encryptedPassword);
    } catch (error) {
        console.log(error);
        throw new AppError("Cannot validate the Password", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


function createToken(data) {
    try {
        // when we will verify the generated token using jwt.verify() fn
        // we will get this data object as response
        return jwt.sign(data, ServerConfig.JWT_SECRET);
    } catch (error) {
        console.log(error);
        throw new AppError("Cannot create the Token", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


function verifyToken(token) {
    try {
        return jwt.verify(token, ServerConfig.JWT_SECRET);
    } catch (error) {
        console.log(error);
        throw new AppError("Cannot create the Token", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export default {
    validatePassword,
    createToken,
    verifyToken
}