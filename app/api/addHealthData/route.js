import HealthData from "@/models/healthData";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateWeeklyDates() {
  const dates = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
  for (let i = 0; i < 8; i++) {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + i * 7);
    dates.push(newDate);
  }
  return dates;
}

function generateRandomData(type, dates) {
  if (type === mongoose.Schema.Types.ObjectId) {
    return new mongoose.Types.ObjectId();
  } else if (type === Number) {
    return getRandomInt(60, 300); // Adjust range based on context
  } else if (type === String) {
    return Math.random().toString(36).substring(2, 15);
  } else if (type === Boolean) {
    return Math.random() > 0.5;
  } else if (type === Date) {
    return new Date();
  } else if (Array.isArray(type) && dates) {
    return dates.map((date) => ({
      value: generateRandomData(type[0], null),
      date,
    }));
  }
  return null;
}

function generateRandomHealthData() {
  const weeklyDates = generateWeeklyDates();
  const schemaPaths = HealthData.schema.paths;
  const healthData = {};

  Object.keys(schemaPaths).forEach((key) => {
    if (!key.includes("__v")) {
      // Exclude version key
      const type = schemaPaths[key].instance;
      if (key.endsWith(".$")) {
        // Handle arrays
        healthData[key.slice(0, -2)] = weeklyDates.map((date) => ({
          value: generateRandomData(type, null),
          unit: type === Number ? "units" : undefined, // Placeholder unit
          date,
        }));
      } else {
        healthData[key] = generateRandomData(type, weeklyDates);
      }
    }
  });

  return healthData;
}

export async function POST(req) {
  try {
    await connectDB();

    const fakeEntries = [];
    for (let i = 0; i < 10; i++) {
      fakeEntries.push(generateRandomHealthData());
    }

    await HealthData.insertMany(fakeEntries);

    return NextResponse.json({
      status: 200,
      message: "Health data populated successfully",
      entries: fakeEntries,
    });
  } catch (error) {
    console.error("Error populating health data:", error);
    return new Response("Error occurred during health data population", {
      status: 500,
    });
  }
}
