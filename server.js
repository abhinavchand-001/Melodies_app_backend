import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import songRouter from './src/routes/songsRoute.js'; 
import albumRouter from './src/routes/albumRoute.js';


// app config 

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware 
app.use(express.json());
app.use(cors()); 

app.use('/api/song' , songRouter)
app.use('/api/album' , albumRouter)

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})
