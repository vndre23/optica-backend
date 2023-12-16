import { Request, Response } from "express";
import { DtoRequestGender } from "../domain";
import { GenderData } from "../../Drivers/DB/MongoDB/seeders/Gender.data";
import { TypeDocumentModel } from "../drivers/DB/mongo/models/TypeDocument.model";
import { TypeDocumentsData } from "../../Drivers/DB/MongoDB/seeders/TypeDocuments.data";
export const generate = async(req:Request, res:Response)=>{
    
    
    try {
        
        const generateTypeDocument = new TypeDocumentModel();
        
        await generateTypeDocument.collection.insertMany(TypeDocumentsData);
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
    const typeDocuments = await TypeDocumentModel.find();
    res.json({ok:true,typeDocuments});
}