import { prop, getModelForClass, Ref } from "@typegoose/typegoose";

import {Customer as ICustomer} from '../../../../domain'
import { IGender, ITypeDocument } from "../../../../../general/domain";
import { Gender } from "../../../../../general/drivers/DB/mongo/models/Gender.model";
import { Types } from "mongoose";
import { TypeDocument } from "../../../../../general/drivers/DB/mongo/models/TypeDocument.model";
export class Customer implements ICustomer{

    

    @prop()
    firstName: string;

    @prop()
    lastName: string;

    @prop()
    birthDate: Date;

    @prop()
    age: number;

    @prop({type: Types.ObjectId, ref:Gender.name })
    // @prop({ref:()=>Gender })
    gender: IGender

    @prop()
    numberDocument: string;

    @prop({ref: ()=> TypeDocument})
    typeDocument: ITypeDocument;

    @prop({default: {code:1,name:'active'}})
    status:{
        code: number;
        name: string;
    }
    @prop()
    address?: string;
    @prop()
    codigo?: number;
    @prop()
    email?: string;
    @prop()
    enterprise:{
        numberDocument:string,
        businessName:string
    };

}

export const CustomerModel =getModelForClass(Customer);