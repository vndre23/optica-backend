import { IAccess } from "../../../general/domain";
import { TypeDocument } from "../../../general/drivers/DB/mongo/models/TypeDocument.model";

export interface User{
    _id?:string;
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    createdAt?:Date;
    updateAt?:Date;
    typeDocument: TypeDocument;
    numberDocument: string;
    phone?:string;
    cellPhone?: string;
    address?: string;
    enterprise:{
        numberDocument:string;
        businessName:string;
    };
    birthDate:Date;
    accesses?:IAccess[];
    businessAdministrator:boolean;
    superAdmin:boolean;
    
}
