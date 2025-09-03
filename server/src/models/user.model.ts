import mongoose, { model, Schema, InferSchemaType }  from "mongoose";
const UserSchema= new Schema ({
    username: {type:String, unique: true},
    password :String
})
export type User = InferSchemaType<typeof UserSchema>;
export const UserModel = model<User>("user", UserSchema);