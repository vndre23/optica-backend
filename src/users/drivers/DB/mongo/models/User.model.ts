import { prop, getModelForClass, Ref,modelOptions } from "@typegoose/typegoose";
import {User as IUser} from '../../../../domain'
import { IAccess, IGender, ITypeDocument } from "../../../../../general/domain";
import { Gender } from "../../../../../general/drivers/DB/mongo/models/Gender.model";
import { Types } from "mongoose";
import { TypeDocument } from "../../../../../general/drivers/DB/mongo/models/TypeDocument.model";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
class User implements IUser{
    @prop({ref: ()=> Gender})
    gender:IGender;
    
    @prop({unique:true})
    email:string;

    @prop()
    password:string;

    @prop()
    firstName: string;

    @prop()
    lastName: string;

    @prop()
    numberDocument: string;

    @prop()
    birthDate:Date;
    
    @prop({ref: ()=> TypeDocument})
    typeDocument: ITypeDocument;

    @prop({default: {code:1,name:'active'}})
    status:{
        code: number;
        name: string;
    }
    @prop()
    enterprise:{
        numberDocument:string;
        businessName:string;
    };
    @prop()
    address:string;

    @prop()
    phone?: string;

    @prop()
    businessAdministrator: boolean;
    @prop()
    superAdmin: boolean;

    @prop()
    accesses:IAccess[];
}

export const UserModel =getModelForClass(User);