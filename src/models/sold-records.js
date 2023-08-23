import mongoose from "mongoose";
import { Enums } from "../utils/common";

const { PENDING, PAID } = Enums.PAYMENT_STATUS;

const soldRecordsSchema = mongoose.Schema(
    {
        firm_name: {
            type: String,
            required: true
        },
        vehicle_registration_number: {
            type: String,
            required: true
        },
        vehicle_unloaded_weight: {
            type: Number,
            required: true
        },
        vehicle_loaded_weight: {
            type: Number,
            required: true
        },
        broker_name: {
            type: String,
            required: true
        },
        goods_name: {
            type: String,
            required: true
        },
        net_goods_weight: {
            type: Number,
            required: true
        },
        goods_price_per_quintal: {
            type: Number,
            required: true
        },
        number_of_bundles: {
            type: Number,
            required: true
        },
        payment_status: {
            type: String,
            enum: [PENDING, PAID],
            default: PENDING
        },
        driver_contact_number: {
            type: Number,
            default: ""
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
    },
    {
        timestamps: true
    }
);


const soldRecords = mongoose.model("sold_records", soldRecordsSchema);

export default soldRecords;