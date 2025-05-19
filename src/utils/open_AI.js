import { GoogleGenerativeAI } from "@google/generative-ai";
const openai = new GoogleGenerativeAI(process.env.REACT_APP_OPEN_AI_KEY);
export default openai;
