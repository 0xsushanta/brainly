import { Request, Response } from "express";
import { LinkModel } from "../models/link.model";
import { random } from "../utils/random";
import { link } from "fs";
import { ContentModel } from "../models/content.model";
import { UserModel } from "../models/user.model";

export const contentShare = async (req: Request, res: Response) => {
    const share = req.body.share
 const hash=random(10)
    if (share) {
       
        try {
            await LinkModel.create({
                //@ts-ignore
                userId: req.userId,
                hash: hash
            })
        } catch (error) {
            res.status(400).json({ msg: error })
        }
    }
    else {
        try {
            await LinkModel.deleteOne({
                //@ts-ignore
                userId: req.userId
            })
        } catch (error) {
            res.status(400).json({ msg: error })
        }

    }
    res.status(200).json({msg:"/share"+hash})
}

export const sharelink=  async(req:Request,res: Response)=>{
    const hash=req.params.sharelink
    const link= await LinkModel.findOne({
        hash
    })
    if(!link){
        res.status(411).json({msg:"incorrect input"})
        return
    }
    const content= await ContentModel.find({
        userId:link.userId

    })
   const user= await UserModel.findOne({
    userId: link.userId
   })
   res.json({
    username: user?.username,
    content: content
   })


}