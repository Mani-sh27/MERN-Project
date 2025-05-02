import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

import connectCloudinary from './config/cloudinary.js';
import productRouter from './Routes/productRoute.js';
import userRouter from './Routes/userRoute.js';


// ----------------app config-----------------
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// --------------middlares------------------
app.use(express.json())
app.use(cors())

// --------------api endpoints------------------
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req,res)=>{
    res.send("App is Working")
})
app.listen(port , ()=>console.log("server is running"))
