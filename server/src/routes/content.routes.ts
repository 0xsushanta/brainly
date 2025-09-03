import express from "express"
import { userMiddleware } from "../middlewares/auth.middleware"
import { contentPost, getContent } from "../controllers/content.controller"
const router= express.Router()
router.post("/",userMiddleware,contentPost)
router.get("/",userMiddleware,getContent)
router.delete("/",userMiddleware,(req,res)=>{

})
export default router