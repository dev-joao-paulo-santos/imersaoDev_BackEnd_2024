// npm init es6 -y  
// npm install express
// 

import express from "express";
import routes from "./src/routes/postRoutes.js";


const posts = [
    {
        id: 1,
        descricao: "Combat Master GBB",
        imagem: "https://airsofts.com.br/wp-content/uploads/2023/03/Pistola-de-Airsoft-JW3-2011-Combat-Master-GBB.jpg"
    },
    {
        id: 2,
        descricao: "Pit Viper",
        imagem: "https://www.arsenalsports.com/img/25445/produtos/1200/76e4b26058cea894ca59f1337ab186ba.jpg"
    },
    {
        id: 3,
        descricao: "LimCat H-bar GBB",
        imagem: "https://www.sixmm.com/cdn/shop/products/ArmyArmament_R610-3Limcat4.3HiCapaGBBAirsoftPistol_BLK_3.jpg?v=1675243118&width=1200"
    },
    {
        id: 4,
        descricao: "M1911",
        imagem: "https://http2.mlstatic.com/D_897447-MLB79634490544_102024-O.jpg"
    },
    {
        id: 5,
        descricao: "M45A1",
        imagem: "https://static.netshoes.com.br/produtos/pistola-airsoft-co2-colt-m45a1-tan-full-metal/04/BJI-0094-004/BJI-0094-004_zoom1.jpg?ts=1660251765&ims=544x"
    }
];
// isso é um mock. "mock" não se refere a um banco de dados, mas sim a uma técnica de teste. Em programação, mocks são frequentemente utilizados para simular interações com componentes que ainda não estão implementados ou que são difíceis de testar.

const app = express();

app.use(express.static("uploads"))
routes(app)


app.listen(3000, ()=>{
    console.log("Servidor rodando!");
});
















// function searchPostByID(id){
//     return posts.findIndex((post)=>{
//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res)=>{
//     const index = searchPostByID(req.params.id)
//     res.status(200).json(posts[index]);
// });