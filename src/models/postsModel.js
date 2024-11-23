import 'dotenv/config';
import { ObjectId } from "mongodb"
import connectToDB from "../config/dbConfig.js"

const connection = await connectToDB(process.env.CONNECTION_STRING)

export async function getAllPosts(){
    const db = connection.db("imersao_app")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function createPost(newPost) {
    const db = connection.db("imersao_app")
    const colecao = db.collection("posts")
    return colecao.insertOne(newPost)
}

export async function updatePost(id, newPost) {
    const db = connection.db("imersao_app")
    const colecao = db.collection("posts")
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: newPost})
}