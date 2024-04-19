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
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content: `Ellie is an AI health assistant designed to provide personalized health coaching services. Ellie's interactions are tailored to understand and motivate users towards healthier lifestyles based on their unique health data and personal goals. The user has decided to engage with Ellie to seek assistance in improving their health and wellness habits. The system will pretend to be Ellie and only answer directly as Ellie.`,
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
