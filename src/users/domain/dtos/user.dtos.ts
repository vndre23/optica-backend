import { IGender, ITypeDocument } from "../../../general/domain";
export interface DtoRequestUser {
    typeDocument:ITypeDocument;
    numberDocument:string;
    gender:IGender;
    birthDate:Date;
    phone:string;
    address:string;
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    enterprise:{
        numberDocument:string;
        businessName:string;
    };
    accesses?:accesses[];
    
}
interface accesses{
    _id: string;
    name: string;
    path:string;
    create:boolean;
    update:boolean;
    delete:boolean;
}