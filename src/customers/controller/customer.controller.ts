import { Request, Response } from "express";
import { DtoRequestCustomer } from "../domain";
import {CustomerModel} from '../drivers/DB/mongo/models/Customer.model';
import {UserModel} from '../../users/drivers/DB/mongo/models/User.model';
import Jwt from 'jsonwebtoken';
export const create = async(req:Request, res:Response)=>{
    const {idUser} = req.body;
    const {age,birthDate,gender,lastName,firstName,numberDocument,status,typeDocument,address,codigo,email}:DtoRequestCustomer = req.body;
    try {
        const user = await UserModel.findById(idUser);
        if(!user){
            res.status(401).json({
                ok:false,
                errorMessage: 'No dispones de permisos'
            });
            return;
        }
        const validationCustomer = await CustomerModel.findOne({numberDocument,enterprise:user.enterprise});
        console.log(validationCustomer);
        if(validationCustomer){
            res.status(400).json({
                ok:false,
                errorMessage: 'Cliente ya existe'
            });
            return;
        }
        const patient = new CustomerModel({
            age,
            birthDate,
            gender,
            lastName,
            firstName,
            numberDocument,
            status,
            typeDocument,
            address,
            codigo,
            email,
            enterprise: user.enterprise,

        });
        await patient.save();
        res.json({ok:true,patient,errorMessage:null});
        
    } catch (error) {
        res.json({ok:false,errorMessage:`${error}`})
    }
}

export const findAll = async(req:Request|any, res:Response)=>{
    const idUser = req.user._id;
    const user = await UserModel.findById(idUser);
    if(!user){
        res.status(401).json({
            ok:false,
            errorMessage: 'No dispones de permisos'
        });
        return;
    }
    const customers = await CustomerModel.find({enterprise:user.enterprise}).populate(['typeDocument','gender']);
    res.json({ok:true,customers});
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
    const {age,birthDate,gender,lastName,firstName,numberDocument,status,typeDocument,address,codigo,email}:DtoRequestCustomer = req.body;
    console.log(_id,req.body);
    const customer = await CustomerModel.findByIdAndUpdate(_id,{age,birthDate,gender,lastName,firstName,numberDocument,status,typeDocument,address,codigo,email})
    res.json({ok:true,customer});
}

export const findById = async(req:Request|any, res:Response)=>{
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
    const customer = await CustomerModel.findById(_id).populate(['typeDocument','gender']);
    res.json({ok:true,customer});
}