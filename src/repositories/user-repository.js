import { User } from "../models";
import { CrudRepository } from "./index";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getUserByEmail(email) {
        const user = await this.model.findOne({ email });
        return user;
    }
}

export default UserRepository;