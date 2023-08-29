import { CrudRepository } from "../repositories";
import { PurchaseRecords } from "../models";

class PurchaseRecordsRepository extends CrudRepository {
    constructor() {
        super(PurchaseRecords);
    }
}

export default PurchaseRecordsRepository;