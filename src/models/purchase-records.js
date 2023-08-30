import mongoose from "mongoose";
import { Enums } from "../utils/common";

const { NORMAL_KANTA, DHARAM_KANTA } = Enums.KANTA_TYPE;
const {WHEAT, PADDY_SHAYAMA, PADDY_MOTA, RICE} = Enums.GOODS_NAME;


const purchaseRecordSchema = mongoose.Schema(
    {
        seller_name: {
            type: String,
            required: true
        },
        seller_address: {
            type: String,
            required: true
        },
        goods_name: {
            type: String,
            required: true,
            enum: [WHEAT, PADDY_SHAYAMA, PADDY_MOTA, RICE]
        },
        bundle_weight_in_kg: {
            type: Number,
            required: true
        },
        number_of_bundles: {
            type: Number,
            required: true
        },
        remaining_weight_in_kg: {
            type: Number,
            required: true
        },
        net_goods_weight_in_kg: {
            type: Number,
            required: true
        },
        price_per_quintal: {
            type: Number,
            required: true
        },
        goods_cost: {
            type: Number,
            required: true
        },
        labour_cost: {
            type: Number,
            required: true
        },
        payable_amount: {
            type: Number,
            required: true
        },
        weight_on_kanta_type: {
            type: String,
            required: true,
            enum: [NORMAL_KANTA, DHARAM_KANTA]
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
);



const PurchaseRecords = mongoose.model("purchase_records", purchaseRecordSchema);

export default PurchaseRecords;