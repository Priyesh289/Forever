import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';



//App Config
const app = express();
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()


//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);


app.get('/', (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log("Server started on PORT:" + port)
})