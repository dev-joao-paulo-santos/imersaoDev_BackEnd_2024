import { MongoClient } from "mongodb";

export default async function connectToDB(connectionString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionString);
        console.log('Conectando ao cluster...');
        await mongoClient.connect();
        console.log('Conectado ao Atlas com sucesso!');

        return mongoClient;
    } catch (err){
        console.error('Falha na conexão!', err);
        process.exit()
    }
}