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
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a very helpful and committed health nutrition assistant. You provide very brief but direct responses that will be viewed as a message to the user. You must not use markdown at all in your responses.`,
        },
        { role: "user", content: inputText },
      ],
      seed: "2024",
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
