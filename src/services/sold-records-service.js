import { StatusCodes } from "http-status-codes";
import { SoldRecordsRepository } from "../repositories";
import { AppError } from "../utils/errors";


const soldRecordsRepository = new SoldRecordsRepository();


async function create(data) {
    try {
        data.net_goods_weight = data.vehicle_loaded_weight - data.vehicle_unloaded_weight;

        const soldRecord = await soldRecordsRepository.create(data);

        return soldRecord;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot create the sold records", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getSoldRecordsByUserIdAndRecordId(data) {
    try {
        const soldRecord = await soldRecordsRepository.getSoldRecordsByUserIdAndRecordId(data);
        return soldRecord;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot get the sold-record details", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getSoldRecordsByUserId(userId) {
    try {
        const soldRecords = await soldRecordsRepository.getSoldRecordsByUserId(userId);
        return soldRecords;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot get the sold records", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export default {
    create,
    getSoldRecordsByUserIdAndRecordId,
    getSoldRecordsByUserId
}