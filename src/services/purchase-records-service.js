import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/errors";
import { PurchaseRecordsRepository } from "../repositories";


const purchaseRecordsRepository = new PurchaseRecordsRepository();


async function create(data) {
    try {
        const purchaseRecord = await purchaseRecordsRepository.create(data);
        return purchaseRecord;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot create the purchase records", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getUsingDateWithRecentTimeOrder(data) {
    try {
        const purchaseRecords = await purchaseRecordsRepository.getUsingDateWithRecentTimeOrder(data);
        return purchaseRecords;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot get the purchase records", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export default {
    create,
    getUsingDateWithRecentTimeOrder
}