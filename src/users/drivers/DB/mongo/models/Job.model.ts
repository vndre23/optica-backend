import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Job as IJob } from "../../../../domain";
import { IAccess } from "../../../../../general/domain";
import { Access } from "../../../../../general/drivers/DB/mongo/models/Access.model";

export class Job implements IJob{

    
    @prop({unique:true})
    name:string;

    
    @prop({default: {code:1,name:'active'}})
    status:{
        code: number;
        name: string;
    };

    @prop({ref: ()=> Access})
    access: IAccess[];
    

}

export const JobModel =getModelForClass(Job);