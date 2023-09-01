import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/errors";
import { PurchaseRecordsRepository } from "../repositories";
import { Constant, Enums } from "../utils/common";


const { WHEAT, PADDY_MOTA, PADDY_SHAYAMA, RICE } = Enums.GOODS_NAME;


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

async function getDateWise(data) {
    try {
        const purchaseRecords = await purchaseRecordsRepository.getDateWise(data);

        let purchaseRecordsWithRokad = { purchaseRecords };

        const rokadDetails = {};

        purchaseRecords.forEach(record => {

            rokadDetails.labour_cost ??= 0;
            rokadDetails.net_goods_weight_of_all_type_in_quintal ??= 0;
            rokadDetails.net_wheat_weight_in_quintal ??= 0;
            rokadDetails.net_paddy_mota_weight_in_quintal ??= 0;
            rokadDetails.net_paddy_shayama_weight_in_quintal ??= 0;
            rokadDetails.net_rice_weight_in_quintal ??= 0;
            rokadDetails.goods_cost ??= 0;
            rokadDetails.payable_amount ??= 0;


            rokadDetails.labour_cost += record.labour_cost;
            rokadDetails.net_goods_weight_of_all_type_in_quintal += (record.net_goods_weight_in_kg);
            rokadDetails.goods_cost += record.goods_cost;
            rokadDetails.payable_amount += record.payable_amount



            if (record.goods_name === WHEAT) {
                rokadDetails.net_wheat_weight_in_quintal += record.net_goods_weight_in_kg;
            }
            else if (record.goods_name === PADDY_MOTA) {
                rokadDetails.net_paddy_mota_weight_in_quintal += record.net_goods_weight_in_kg;
            }
            else if (record.goods_name === PADDY_SHAYAMA) {
                rokadDetails.net_paddy_shayama_weight_in_quintal += record.net_goods_weight_in_kg;
            }
            else if (record.goods_name === RICE) {
                rokadDetails.net_rice_weight_in_quintal += record.net_goods_weight_in_kg;
            }

        });

        rokadDetails.net_goods_weight_of_all_type_in_quintal /= 100;
        rokadDetails.net_wheat_weight_in_quintal /= 100;
        rokadDetails.net_paddy_mota_weight_in_quintal /= 100;
        rokadDetails.net_paddy_shayama_weight_in_quintal /= 100;
        rokadDetails.net_rice_weight_in_quintal /= 100;

        purchaseRecordsWithRokad = { ...purchaseRecordsWithRokad, rokadDetails };

        return purchaseRecordsWithRokad;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot get the purchase records", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroy(data) {
    try {
        const purchaseRecord = await purchaseRecordsRepository.destroy(data.id, data.userId)
        return purchaseRecord;
    } catch (error) {
        console.log(error);

        if (error instanceof AppError) throw error;

        throw new AppError("Cannot delete the purchase records", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default {
    create,
    getDateWise,
    destroy
}