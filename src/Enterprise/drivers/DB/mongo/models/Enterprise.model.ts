import { prop, getModelForClass, Ref, modelOptions } from "@typegoose/typegoose";

import {Enterprise as IEnterprise} from '../../../../domain';
import { Types } from "mongoose";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Enterprise implements IEnterprise{

    @prop()
    numberDocument:string;

    @prop()
    businessName: string;

    @prop()
    email: string;

    @prop()
    phone: string;

    @prop()
    address: string;

    @prop({default: {code:1,name:'active'}})
    status:{
        code: number;
        name: string;
    }
    

}
export const EnterpriseModel =getModelForClass(Enterprise);