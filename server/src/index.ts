import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './db/db'
import userRoutes from './routes/user.routes'

dotenv.config()
const app= express()
app.use(express.json())

connectdb()
app.use('/api/v1/user',userRoutes)


app.post("/api/v1/content",(req,res)=>{
    
})
app.get('/api/v1/content',(req,res)=>{

})
app.delete("/api/v1/content",(req,res)=>{

})
app.post('/api/v1/brain/share',(req,res)=>{

})
app.get('/api/v1/brain/:sharelink',(req,res)=>{

})
app.listen(process.env.PORT||3000,()=>{
    console.log("server is running on", process.env.PORT);
    
})