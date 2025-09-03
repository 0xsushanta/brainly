import mongoose, { model, Schema } from "mongoose";

const Linkschema= new Schema({
    hash : String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const LinkModel = model("Links", Linkschema);