import { prop, getModelForClass } from "@typegoose/typegoose";

import { IGender } from "../../../../domain";

export class Gender implements IGender{
    @prop({unique:true})
    name: string;
}

export const GenderModel =getModelForClass(Gender);
// export default GenderModel;