import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { ServerConfig } from "../config";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


userSchema.pre("save", function (next) {
    const saltRounds = parseInt(ServerConfig.SALT_ROUNDS);

    const encryptedPassword = bcrypt.hashSync(this.password, saltRounds);

    this.password = encryptedPassword;

    next();
});


const User = mongoose.model("users", userSchema);

export default User;