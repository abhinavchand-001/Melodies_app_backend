import { addsong, listsong , removesong} from "../controllers/songController.js";
import express from 'express'
import upload from '../middlewares/multer.js'

const songRoute = express.Router();

songRoute.post('/add' , upload.fields([{name: 'image', maxcount:1},{name: 'audio',maxcount:1}]), addsong)
songRoute.get('/list' , listsong)
songRoute.post('/remove' , removesong)
export default songRoute