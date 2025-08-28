import express from 'express'
import mongoose  from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app= express()
console.log(process.env.PORT)
app.listen(process.env.PORT||3000,()=>{
    console.log("server is running on", process.env.PORT);
    
})