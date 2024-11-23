import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})

export default async function gerarDescricaoComGemini(imageBuffer){
    const prompt = "Gere um alt em português (brasileiro) para a seguinte imagem:";

    try{
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/jpg"
            }
        };
        const res = await model.generateContent([prompt, image])
        return res.response.text() || "Alt-text indisponivel."
    } catch(err){
        console.error("Erro ao obter alt-text: ", err.message, err)
        throw new Error("Erro ao obter alt-text do Gemini.")
    }
}
