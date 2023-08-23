import express from "express";
import { UserMiddleware } from "../../middlewares";
import { UserController } from "../../controllers";


const router = express.Router();


router.post(
    "/signup",
    UserMiddleware.validateSignupRequest,
    UserController.signup
);

router.post(
    "/signin",
    UserMiddleware.validateSigninRequest,
    UserController.signin
);

export default router;