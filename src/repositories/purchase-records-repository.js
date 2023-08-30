import { CrudRepository } from "../repositories";
import { PurchaseRecords } from "../models";

class PurchaseRecordsRepository extends CrudRepository {
    constructor() {
        super(PurchaseRecords);
    }

    async getUsingDateWithRecentTimeOrder(data) {
        const { userId, date } = data;

        const today = new Date(date);

        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);

        const purchaseRecords = await this.model.find({
            $and: [
                { userId: userId },
                { createdAt: { $gte: today } },
                { createdAt: { $lt: nextDay } }
            ]
        }).sort({ createdAt: -1 });

        return purchaseRecords;
    }
}

export default PurchaseRecordsRepository;