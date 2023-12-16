import { Request, Response } from "express";
import { JobModel } from "../drivers/DB/mongo/models/Job.model";

export const create = async(req:Request, res:Response)=>{
    

    try {
        const {name} = req.body;
        const job = new JobModel({
           name

        });
        
        await job.save();
        res.json(job);
    } catch (error) {
        console.log(`${error}`);
    }
}
export const findAll = async (req:Request, res: Response)=>{
    try {
       const jobs = await JobModel.find().populate({
        path:'access',
        // populate: ['typeDocument','gender'],

    });
        
        res.json(jobs);
    } catch (error) {
        console.log(`${error}`);
    }
    
}
export const update = async (req:Request, res: Response)=>{
    try {
        const {_id,name} = req.body;
        
        const job = await JobModel.findByIdAndUpdate(_id,{name});

        
         
         res.json(job);
     } catch (error) {
         console.log(`${error}`);
     }
}