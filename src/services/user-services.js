import { StatusCodes } from "http-status-codes";
import { UserRepository } from "../repositories";
import { AppError } from "../utils/errors";
import { Auth } from "../utils/common";


const userRepository = new UserRepository();

async function signup(data) {
    try {
        const user = await userRepository.create(data);
        return user;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot create the user", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function signin(data) {
    try {
        const user = await userRepository.getUserByEmail(data.email);

        if (!user) {
            throw new AppError("Invalid Email", StatusCodes.BAD_REQUEST);
        }

        const isPasswordMatching = Auth.validatePassword(data.password, user.password);

        if (!isPasswordMatching) {
            throw new AppError("Invalid Password", StatusCodes.BAD_REQUEST);
        }

        const token = Auth.createToken({
            userId: user.id,
            name: user.name,
            email: user.email
        });

        return token;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot signin the user", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function authenticateUser(token) {
    try {
        const data = Auth.verifyToken(token);

        const user = await userRepository.get(data.userId);

        if (!user) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }

        return user.id;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError('Cannot Authenticate', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default {
    signup,
    signin,
    authenticateUser
}