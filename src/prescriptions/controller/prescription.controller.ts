import { Request, Response } from "express";
import { DtoRequestPrescription } from "../domain";
import { PrescriptionModel } from "../drivers/DB/mongo/models/Prescription.model";
import { UserModel } from "../../users/drivers/DB/mongo/models/User.model";
export const create = async(req:Request|any, res:Response)=>{
    
    const {emisionDate,customer,dip,far,near,observations}:DtoRequestPrescription = req.body;
    // let emision = new Date(emisionDate);
    try {
        const idUser = req.user._id;
        const user = await UserModel.findById(idUser);
        if(!user){
            res.status(401).json({
                ok:false,
                errorMessage: 'No dispones de permisos'
            });
            return;
        }
        const prescription = new PrescriptionModel({
            customer,
            dip,
            emisionDate,
            far,
            near,
            observations,
            enterprise:user.enterprise,

        });
        await prescription.save();
        res.json({ok:true,prescription});
        
    } catch (error) {
        res.json({ok:false,messageError:`${error}`});
    }
}

export const findAll = async(req:Request|any, res:Response)=>{
    const idUser = req.user?._id;
    const user = await UserModel.findById(idUser);
    if(!user){
        res.status(401).json({
            ok:false,
            errorMessage: 'No dispones de permisos'
        });
        return;
    }
    const prescriptions = await PrescriptionModel.find({enterprise:user.enterprise}).populate({
        path:'customer',
        populate: 'typeDocument',
    });
    res.json({ok:true,prescriptions});
}
export const update = async(req:Request|any, res:Response)=> {
    const idUser = req.user._id;
    const user = await UserModel.findById(idUser);
    if(!user){
        res.status(401).json({
            ok:false,
            errorMessage: 'No dispones de permisos'
        });
        return;
    }
    const {_id} = req.body;
    const {customer,dip,far,near,observations}:DtoRequestPrescription = req.body;
    
    console.log(_id,req.body);
    const prescription = await PrescriptionModel.findByIdAndUpdate(_id,{customer,dip,far,near,observations})
    res.json({ok:true,prescription});
}

export const findById = async(req:Request|any, res:Response)=> {
    const idUser = req.user._id;
    const user = await UserModel.findById(idUser);
    if(!user){
        res.status(401).json({
            ok:false,
            errorMessage: 'No dispones de permisos'
        });
        return;
    }
    const {_id} = req.params;
    console.log(_id);
    
    const prescription = await PrescriptionModel.findById(_id).populate({
        path:'customer',
        populate: ['typeDocument','gender'],

    });
    if(!prescription){
        return res.status(404).json({ok:false,errorMessage:'not found'});    
    }
    res.json({ok:true,prescription});
    // const {age,birthDate,gender,lastName,firstName,numberDocument,status,typeDocument,address,codigo,email,}:DtoRequestCustomer = req.body;
    // console.log(_id,req.body);
    // const customer = await CustomerModel.findByIdAndUpdate(_id,{age,birthDate,gender,lastName,firstName,numberDocument,status,typeDocument,address,codigo,email})
    // res.json(customer);
}

export const nullify = async(req:Request|any, res:Response)=> {
    const idUser = req.user._id;
    const user = await UserModel.findById(idUser);
    if(!user){
        res.status(401).json({
            ok:false,
            errorMessage: 'No dispones de permisos'
        });
        return;
    }
    const {_id} = req.body;
    
    console.log(_id,req.body);
    const prescription = await PrescriptionModel.findByIdAndUpdate(_id,{status:{
        code:2,
        name: "anulado"
    }})
    res.json({ok:true,prescription});
}

export const activate = async(req:Request|any, res:Response)=> {
    const idUser = req.user._id;
    const user = await UserModel.findById(idUser);
    if(!user){
        res.status(401).json({
            ok:false,
            errorMessage: 'No dispones de permisos'
        });
        return;
    }
    const {_id} = req.body;
    
    console.log(_id,req.body);
    const prescription = await PrescriptionModel.findByIdAndUpdate(_id,{status:{
        code:1,
        name: "active"
    }})
    res.json({ok:true,prescription});
}