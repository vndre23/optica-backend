import { Types } from "mongoose";

export interface IAccess{
    _id?:string | Types.ObjectId;
    name: string;
    status: {
        code:number;
        name:string;
    };
    path:string;
    icon: string;
    permisos:permisos[];
}
export interface permisos{
    code:number; //codigo del permiso 1 = Create 2 = update 3 = delete
    name:string;
   
}