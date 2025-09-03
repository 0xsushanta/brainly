import { Request, Response } from "express"
import { ContentModel } from "../models/content.model"
export const contentPost = async (req: Request, res: Response) => {
    const link = req.body.link
    const type = req.body.type
    try {
        await ContentModel.create({
            link,
            type,
            //@ts-ignore
            userId: req.userId,
            tag: []
        })
        res.status(200).json({ msg: "content added" })
    } catch (error) {
        res.status(411).json({ msg: `${error}` })
    }
}
export const getContent = async (req: Request, res: Response) => {


    try {
        //@ts-ignore
        const userId = req.userId
        const content = await ContentModel.findOne({
            userId: userId
        })
        res.status(200).json({ msg: content })
    } catch (error) {
        res.status(400).json({ msg: `${error}` })
    }
}