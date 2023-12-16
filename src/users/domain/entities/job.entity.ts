import { IAccess } from "../../../general/domain";


export interface Job{
    _id?:string;
    name:string;
    status:{
        code:number;
        name:string;
    };
    access:IAccess[];
    
}