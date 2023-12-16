import { Types } from "mongoose";

export interface IGender{
    _id?:string | Types.ObjectId;
    name: string;
}