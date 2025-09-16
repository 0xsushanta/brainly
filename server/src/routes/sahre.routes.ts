import express from "express"
import { userMiddleware } from "../middlewares/auth.middleware"
import { contentShare, sharelink } from "../controllers/share.controller"
const router=express.Router()
router.post("/share",userMiddleware,contentShare)
router.get("/:sharelink",sharelink)
export default router
