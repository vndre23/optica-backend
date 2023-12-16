import { Request, Response } from "express";
import { DtoRequestEnterprise } from "../domain";
import { EnterpriseModel } from "../drivers/DB/mongo/models/Enterprise.model";
import * as bcrypt from 'bcrypt';
import { UserModel } from "../../users/drivers/DB/mongo/models/User.model";
import { AccessModel } from "../../general/drivers/DB/mongo/models/Access.model";

export const create = async(req:Request, res:Response)=>{
    
    const {numberDocument, businessName, email, address, phone}:DtoRequestEnterprise = req.body;
    // let emision = new Date(emisionDate);
    try {
        const validateEnterprise = await EnterpriseModel.findOne({numberDocument});
        const validateEnterpriseEmail = await EnterpriseModel.findOne({email});
        const validateEmailUser = await UserModel.findOne({email});
        if(validateEnterprise){
            return res.status(400).json({
                ok:false,
                errorMessage:"empresa ya existe"
            });
        }
        if(validateEnterpriseEmail || validateEmailUser){
            return res.status(400).json({
                ok:false,
                errorMessage:"email ya existe"
            });
        }
        const enterprise = new EnterpriseModel({
            numberDocument, businessName, email, address, phone
        });
        const acceses = await AccessModel.find();
        const user = new UserModel({
            email,
            firstName:businessName,
            lastName:'',
            enterprise:{
                numberDocument,
                businessName
            },
            address,
            phone,
            numberDocument,
            businessAdministrator:true,
            superAdmin:false,
            accesses:acceses,
        });
        user.password=await bcrypt.hash(numberDocument,10);
        
        await enterprise.save();
        await user.save();
        res.json({
            ok:true,
            enterprise
        });
        
    } catch (error) {
        res.json(`${error}`)
    }
}