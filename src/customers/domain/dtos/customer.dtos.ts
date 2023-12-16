import { Gender } from "../../../general/drivers/DB/mongo/models/Gender.model";
import { TypeDocument } from "../../../general/drivers/DB/mongo/models/TypeDocument.model";

export interface DtoRequestCustomer{
    typeDocument: TypeDocument;
    numberDocument: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    age: number;
    gender: Gender;
    status: Status;
    codigo?:number;
    address?:string;
    email?:string;
    enterprise?:{
        numberDocument: string;
        businessName:string;
    }
}


interface Status{
    code: number;
    name: string;
}