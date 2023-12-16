import { Request, Response, NextFunction } from "express";
import Jwt from 'jsonwebtoken';


export const validarJWT = (req:Request|any,res:Response,next:NextFunction) => {

    const token = req.header('x-token');
    console.log(token);
    if(!token){
        return res.status(401).json({
            ok:false,
            msg: 'no hay token en la peticion'
        })
    }
    try {
        const payload:any = Jwt.verify(token, process.env.JWT_SECRET || '');
        console.log(payload?.user);
        
        req.user = payload?.user;
        console.log(req.user);
        
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg: 'token no valido'
        })
    }
    

    next();
}
