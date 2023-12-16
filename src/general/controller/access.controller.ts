import { Request, Response } from "express";
import {AccessModel} from '../drivers/DB/mongo/models/Access.model';

import { AccessData } from "../../Drivers/DB/MongoDB/seeders/Access.data";
export const generate = async(req:Request, res:Response)=>{
    try {
        
        if((await AccessModel.find()).length===0){
            const generateAccess = new AccessModel();
        
            await generateAccess.collection.insertMany(AccessData);
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
    const access = await AccessModel.find();
    res.json({ok:true,access});
}
