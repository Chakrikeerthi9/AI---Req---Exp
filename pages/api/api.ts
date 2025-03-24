import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_API_KEY);

export default async function getResponse(text: string) {
    const inputText = text.trim() === '' ? "NaN" : `structured details of  ${text}`;
    const response = await client.textGeneration({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        inputs: inputText,
        parameters: { max_new_tokens: 100 },
    });

    return response.generated_text;
}