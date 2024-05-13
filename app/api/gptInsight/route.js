import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const maxDuration = 300;

export async function POST(request) {
  try {
    const req = await request.json();
    const inputText = req.text;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful health nutrition assistant. You will provide simple and very brief analysis and advice on their nutrition based on the user's data. You must not use markdown at all in your responses. You must not repeat any information without valuable insight.`,
        },
        { role: "user", content: inputText },
      ],
    });

    const outputText = response.choices[0].message.content;

    return NextResponse.json({ result: outputText }, { status: 200 });
  } catch (error) {
    console.error(
      "Caught an error during the request or response handling:",
      error
    );
    if (error.response) {
      console.error(
        "Error response from OpenAI:",
        error.response.status,
        error.response.data
      );
      return NextResponse.json({ error: error.response.data }, { status: 500 });
    } else {
      console.error("Error with OpenAI API request:", error.message);
      return NextResponse.json(
        { error: "An error occurred during your request." },
        { status: 500 }
      );
    }
  }
}
