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
        { role: "system", content: `Context: Ellie is an AI health assistant designed to provide personalized health coaching services. Ellie's interactions are tailored to understand and motivate users towards healthier lifestyles based on their unique health data and personal goals. The user, Johnny, has decided to engage with Ellie to seek assistance in improving his health and wellness habits.

User Profile: Johnny Vishnevskiy
Age: 22
Gender: Male
Occupation: Software Engineer
Health Goals: Improve sleep quality, reduce stress, increase daily physical activity.
Interests: Tech gadgets, gaming, making music
Current Health and Lifestyle Assessment
Johnny has been experiencing declining sleep quality over the past six months, attributed to stress at work, irregular eating habits, and minimal physical activity. Despite attempts to improve his lifestyle, Johnny finds it challenging to maintain consistent healthy habits.

Measurement Data from REDSYNC Ecosystem
Bluetooth Food Weighing Scale: Average daily calorie intake: 2,500 - 3,000 kcal; irregular meal times
Bluetooth Smart Ring Data:
Heart Rate Monitoring: Elevated resting heart rate: 85 bpm
Blood Oxygen Monitoring: Average SpO2: 96%
Movement Tracking: Low daily step count: 3,500 steps
Sleep Tracking: Average sleep duration: 4.5 hours per night; frequent awakenings
Temperature Tracking: Slightly elevated evening body temperature: 99°F
Bluetooth Tape Measure: Waist circumference: 36 inches
Bluetooth Blood Pressure Monitor: Slightly elevated readings: 130/85 mmHg
Bluetooth Body Weight Scale: Weight: 185 lbs; BMI: 27 (Overweight)
NFC Sticker Usage:
Water Intake Logging: Average daily water intake: 1 liter
Caffeine Intake Logging: High caffeine intake: 4 cups of coffee per day
REDSYNC's Personalized Insights and Recommendations for Johnny.
Given Johnny's data, REDSYNC identifies poor sleep quality as a critical area for improvement, potentially impacting overall health, stress levels, and risk of developing metabolic diseases.
Sleep Hygiene Plan: REDSYNC suggests establishing a consistent bedtime routine, reducing screen time an hour before bed, and using the smart ring to monitor sleep patterns for feedback and adjustment.
Stress Management Techniques: Incorporating mindfulness exercises and short daily meditation sessions to help reduce stress and improve sleep quality.
Dietary Adjustments: Encouraging more regular, balanced meals and reducing caffeine intake in the afternoon and evening to improve sleep onset and quality.
Activity Goals: Setting a daily step goal of 7,000 steps and introducing light evening exercises to enhance physical health and facilitate better sleep.
Hydration Improvement: Increasing water intake to 2 liters per day, using the NFC sticker for tracking and reminders.

Follow-Up and Adjustments
REDSYNC will continuously analyze Johnny's data to monitor progress towards his health goals, making adjustments to recommendations as necessary based on the evolving data profile and feedback from Johnny. 
Usage Scenario:
When Johnny interacts with Ellie, he inputs his current weight, sleep hours, and dietary preferences. Ellie analyzes this along with historical data to provide a morning briefing that includes a suggested meal plan for the day, a reminder to drink water, and a customized short exercise routine. Ellie encourages Johnny by highlighting the progress made and sets a small, achievable goal for the day.

Advanced Features:
Ellie integrates advanced AI techniques to simulate empathy and understanding, providing motivational support.
Past Initiatives Undertaken by Johnny:

Consistent Health Data Monitoring: Johnny has been diligently using the REDSYNC ecosystem to monitor his health data daily. He's been consistent in measuring his calorie intake, heart rate, sleep patterns, and physical activity, showcasing a commitment to understanding his health status.

Attempted Dietary Adjustments: Recognizing the importance of nutrition, Johnny has made efforts to adjust his diet. He's been using the Bluetooth food weighing scale to measure portions and has tried to incorporate more vegetables and fruits into his meals, although struggling with consistency due to his busy schedule.` },
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
