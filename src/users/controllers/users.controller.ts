import { Request, Response } from "express";
import { UserModel } from "../drivers/DB/mongo/models/User.model";
import * as bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import { AccessModel } from "../../general/drivers/DB/mongo/models/Access.model";
export const create = async(req:Request|any, res:Response)=>{
    try {
        const idUser = req.user._id;
        const {typeDocument,numberDocument,gender,birthDate,phone,address,email, password, firstName, lastName,accesses} = req.body;
        

        
        const userLogin = await UserModel.findById(idUser);
        if(!userLogin){
            res.status(401).json({
                ok:false,
                errorMessage: 'No dispones de permisos'
            });
            return;
        }
        const validationUser = await UserModel.findOne({email:email});
        if(validationUser){
            return res.status(400).json({
                ok:false,
                errorMessage:"email ya existe"
            });
        }
        // const accesos = await AccessModel.find({},{name:1,icon:1,path:1,permisos:1,_id:0});
        const user = new UserModel({
            typeDocument,
            numberDocument,
            gender,
            birthDate,
            phone,
            address,
            email,
            enterprise:userLogin.enterprise,
            //password,
            firstName,
            lastName,
            //accesses:accesos,
            businessAdministrator:false,
            superAdmin:false,
        });
        
        console.log(user);
        
        user.password= await bcrypt.hash(numberDocument,10);
        
        await user.save();
        res.json({ok:true,user});
    } catch (error) {
        console.log(`${error}`);
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
    const users = await UserModel.find({businessAdministrator:false,enterprise:user.enterprise}).populate(['typeDocument','gender']);
    res.json({ok:true,users});
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
    const {typeDocument,numberDocument,gender,birthDate,phone,address,email, password, firstName, lastName,accesses} = req.body;
    console.log(_id,req.body);
    const userUpdate = await UserModel.findByIdAndUpdate(_id,{typeDocument,numberDocument,gender,birthDate,phone,address,email, password, firstName, lastName,accesses})
    res.json({ok:true,userUpdate});
}

export const addPermisos = async(req:Request|any, res:Response)=> {
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
    const {accesses} = req.body;
    console.log(accesses);
    console.log("hola",_id,accesses);
    // const permisos = await AccessModel.find();

    const userUpdate = await UserModel.findByIdAndUpdate(_id,{accesses})
    res.json({ok:true,userUpdate});
}
export const changePassword = async (req:Request|any, res:Response)=>{
    const idUser = req.user._id;
    const user = await UserModel.findById(idUser);
    if(!user){
        res.status(401).json({
            ok:false,
            errorMessage: 'No dispones de permisos'
        });
        return;
    }
    const {passwordActual,passwordNueva,passwordRepeat} = req.body;
    if(passwordNueva!==passwordRepeat){
        res.status(401).json({
            ok:false,
            errorMessage: 'contraseñas diferentes'
        });
        return;
    }
    
    const match = await bcrypt.compare(passwordActual,user?.password);
    console.log(match)
    if(!match){
        res.status(401).json({
            ok:false,
            errorMessage:"Credenciales invalidas"
        });
        return;
    }
    
    const password= await bcrypt.hash(passwordNueva,10);
    await UserModel.findByIdAndUpdate(idUser,{password:password});

    res.status(200).json({
        ok:true,
        errorMessage: 'contraseña cambiada con exito!'
    });
    

}
export const login = async (req:Request, res: Response)=>{
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email}).populate(['typeDocument', 'gender']);
        if(!user || user.status.code===2){
            res.status(401).json({
                ok:false,
                errorMessage:"Credenciales invalidas"
            });
        }
        const pas:string=user?.password || '';
        const match = await bcrypt.compare(password,pas);
        if(!match){
            res.status(401).json({
                ok:false,
                errorMessage:"Credenciales invalidas"
            });
        }
        const token = Jwt.sign(
            {user}, 
            process.env.JWT_SECRET || '' );
        res.json({ok:true,token,user});
    } catch (error) {
        console.log(`${error}`);
    }
    
}

export const refreshToken = async(req:Request|any, res: Response) => {
    try {
        const user = req.user;
        // const user={_id:123,firstName:'jasdjda'}
        //generar un nuevo jwt
        const token = await generarJWT({user});
        res.json({
            ok:true,
            token,
            errorMessage:null,
            user,
            // token,
        });
    } catch (error) {
        console.log(`${error}`);
    }
}

const generarJWT = (payload:any) => {
    return new Promise( (resolve,reject) => {
        // const payload = ({uid,name});

        Jwt.sign(payload, process.env.JWT_SECRET || '',{
            expiresIn: '2h'
        },(err, token)=> {
            if(err){
                console.log(err);
                reject(err);
            }
            resolve(token);
        })
    });
}