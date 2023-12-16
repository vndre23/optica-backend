import { prop, getModelForClass, Ref } from "@typegoose/typegoose";

import {Prescription as IPrescription} from '../../../../domain'
import { Gender } from "../../../../../general/drivers/DB/mongo/models/Gender.model";
import { Types } from "mongoose";
import { TypeDocument } from "../../../../../general/drivers/DB/mongo/models/TypeDocument.model";
import { Customer as ICustomer } from "../../../../../customers/domain";
import { Customer } from "../../../../../customers/drivers/DB/mongo/models/Customer.model";

export class Prescription implements IPrescription{

    @prop()
    emisionDate: Date;

    @prop({type: Types.ObjectId, ref:Customer.name })
    customer: ICustomer;

    @prop()
    far: IFarAndNear;

    @prop()
    near: IFarAndNear;

    @prop()
    dip: number;

    @prop()
    observations: string;

    @prop({default: {code:1,name:'active'}})
    status:{
        code: number;
        name: string;
    };
    @prop()
    enterprise:{
        numberDocument:string,
        businessName:string
    };
    

}
interface IDetail{
    esf: number;
    cil: number;
    eje: number;
}
interface IFarAndNear{
    right: IDetail;
    left: IDetail;
}
export const PrescriptionModel =getModelForClass(Prescription);