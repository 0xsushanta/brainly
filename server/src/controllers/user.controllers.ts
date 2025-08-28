import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { UserModel } from '../models/user.model'
export const signup = async(req:Request, res:Response):Promise<void>=>{
     const username= req.body.username
    const password=req.body.password
    const existingUser= await UserModel.findOne({
        username,
        password
    })
    if(existingUser){
        res.status(400).json({msg:"user already exists"})
        return;
    }
   try {
     await UserModel.create({
        username:username,
        password:password
    })
    res.status(201).json({msg: "user created"})
   } catch (error) {
    res.status(411).json({msg:`${error}`})
   }
}