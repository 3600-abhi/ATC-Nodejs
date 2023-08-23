import { SoldRecords } from "../models";
import { CrudRepository } from "./index";

class SoldRecordsRepository extends CrudRepository {
    constructor() {
        super(SoldRecords);
    }

    async getSoldRecordsByUserId(userId) {
        const soldRecords = await this.model.find({ userId });
        return soldRecords;
    }
}

export default SoldRecordsRepository;