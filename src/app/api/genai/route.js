import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const prompt = reqBody.data.prompt;
    const messages = reqBody.data.messages;

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

    const chat = model.startChat({
      history: messages.map((message) => {
        return {
          role: message.role,
          parts: [{ text: message.content }], // Correct formatting here
        };
      }),
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;

    return new Response(response.text(), {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Something went wrong", { status: 500 });
  }
}
