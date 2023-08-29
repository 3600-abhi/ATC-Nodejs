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

    async getSoldRecordsByUserIdAndRecordId(data) {
        const soldRecord = await this.model.findOne({
            userId: data.userId,
            _id: data.recordId
        });

        return soldRecord;
    }
}

export default SoldRecordsRepository;