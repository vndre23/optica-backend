import { Request, Response } from "express";
import { DtoRequestGender } from "../domain";
import {GenderModel} from '../drivers/DB/mongo/models/Gender.model';
import { GenderData } from "../../Drivers/DB/MongoDB/seeders/Gender.data";
import { TypeDocumentModel } from "../drivers/DB/mongo/models/TypeDocument.model";
import { TypeDocumentsData } from "../../Drivers/DB/MongoDB/seeders/TypeDocuments.data";
export const generate = async(req:Request, res:Response)=>{
    
    
    try {
        
        if((await GenderModel.find()).length===0){
            const generateGender = new GenderModel();
        
            await generateGender.collection.insertMany(GenderData);
        }
        res.json({
            "status":true,
            
        });
        
    } catch (error) {
        res.json({
            "status":`${error}`,
            
        });
    }

    
}

export const findAll = async(req:Request, res:Response) => {
    const genders = await GenderModel.find();
    res.json({ok:true,genders});
}
