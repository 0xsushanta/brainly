import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './db/db'
import userRoutes from './routes/user.routes'
import contentRoutes from './routes/content.routes'
import shareRoutes from './routes/sahre.routes'
import cors from "cors"
// import shareRoutes from './routes/sahre.routes'
dotenv.config()
const app= express()
app.use(cors())
app.use(express.json())

connectdb()
app.use('/api/v1/user',userRoutes)
app.use("/api/v1/content",contentRoutes)
app.use('/api/v1/brain/',shareRoutes)

app.listen(process.env.PORT||3000,()=>{
    console.log("server is running on", process.env.PORT);
    
})