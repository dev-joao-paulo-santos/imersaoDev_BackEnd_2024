import express from 'express'
import multer from 'multer';
import { listPosts, postNewPost, updateNewPost, uploadImage } from '../controllers/postsController.js';
import cors from "cors"

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSucessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({dest: "./uploads" , storage})


const routes = (app)=>{
app.use(express.json());
app.use(cors(corsOptions))

app.get("/posts", listPosts); 
app.post("/posts", postNewPost);
app.post("/upload", upload.single("imagem"), uploadImage)
app.put("/upload/:id", updateNewPost)
}

export default routes;