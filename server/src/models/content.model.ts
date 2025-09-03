import mongoose, { InferSchemaType, model, Schema } from "mongoose"

const ContentSchema = new Schema({
    title: String,
    link: String,
    tag: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref:"user", required :true}
})
export type Content = InferSchemaType<typeof ContentSchema>;
export const ContentModel = model<Content>("Content", ContentSchema);