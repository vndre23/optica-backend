import { prop, getModelForClass } from "@typegoose/typegoose";

import {  ITypeDocument } from "../../../../domain";

export class TypeDocument implements ITypeDocument{
    @prop({ unique: true })
    name: string;

    @prop()
    code: string;
}

export const TypeDocumentModel = getModelForClass(TypeDocument);