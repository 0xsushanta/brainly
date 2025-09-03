import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export const userMiddleware=(req:Request,res:Response, next:NextFunction)=>{
    const headers=req.headers["authorization"]
    const decoded= jwt.verify(headers as string, process.env.JWT_SECRET as string)
    if(decoded){
        //@ts-ignore
        req.userId=decoded.id
        next()
    }
    else{
        res.status(403).json({msg:"you are not logged in"})
    }
    

}