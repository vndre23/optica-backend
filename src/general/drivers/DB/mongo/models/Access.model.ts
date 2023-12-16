import { prop, getModelForClass } from "@typegoose/typegoose";
import { IAccess } from "../../../../domain";



export class Access implements IAccess{
    @prop({unique:true})
    name: string;

    @prop({default: {code:1,name:'active'}})
    status:{
        code: number;
        name: string;
    }
    @prop()
    path:string;
    
    @prop()
    icon: string;

   permisos: permisos[]; 
}
interface permisos{
    code:number; //codigo del permiso 1 = Create 2 = update 3 = delete
    name:string;
}
export const AccessModel =getModelForClass(Access);
// export default GenderModel;