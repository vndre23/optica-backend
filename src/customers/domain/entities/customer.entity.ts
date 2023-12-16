import { IGender, ITypeDocument } from "../../../general/domain";

export interface Customer{
    _id?:string;
    typeDocument: ITypeDocument;
    numberDocument: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    age: number;
    gender: IGender;
    status: Status;
    codigo?:number;
    address?:string;
    email?:string;
    enterprise:{
        numberDocument: string;
        businessName:string;
    }

}

interface Status{
    code: number;
    name: string;
}