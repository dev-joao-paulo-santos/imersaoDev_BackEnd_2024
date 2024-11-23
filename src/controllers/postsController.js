import {getAllPosts, createPost, updatePost} from "../models/postsModel.js";
import fs from "fs"
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listPosts(req, res) {   //Pegar recursos do servidor
    const posts = await getAllPosts()
    res.status(200).json(posts);
}

export  async function postNewPost(req, res){
    const newPost = req.body;
    try{
        const postCreated = await createPost(newPost);
        res.status(200).json(postCreated);
    }
    catch (err){
        console.error(err.message);
        res.status(500).json({"Erro": "Requisição fracassada!"});
    }
}

export  async function uploadImage(req, res){
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    }
    try{
        const postCreated = await createPost(newPost);
        const updatedImage = `uploads/${postCreated.insertedId}.jpg`
        fs.renameSync(req.file.path, updatedImage)
        res.status(200).json(postCreated);
    }
    catch (err){
        console.error(err.message);
        res.status(500).json({"Erro": "Requisição fracassada!"});
    }
}

export  async function updateNewPost(req, res){
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.jpg`

    try{

        const imgBuffer = fs.readFileSync(`uploads/${id}.jpg`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)

        const post = {
            imagem_url: urlImage,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCreated = await updatePost(id, post);
        res.status(200).json(postCreated);
    }
    catch (err){
        console.error(err.message);
        res.status(500).json({"Erro": "Requisição fracassada!"});
    }
}