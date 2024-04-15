import HealthData from "@/models/healthData";
import connectDB from "@/lib/mongodb";
import { faker } from "@faker-js/faker"; // Make sure to install @faker-js/faker package
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const fakeEntries = [];
    for (let i = 0; i < 10; i++) {
      fakeEntries.push({
        userId: mongoose.Types.ObjectId(), // Generate a fake MongoDB ObjectId
        syncCode: faker.datatype.uuid(),   // Using UUIDs for sync codes
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        calorieIntake: {
          dailyAverage: faker.datatype.number({ min: 1500, max: 3000 }),
          mealIrregularity: faker.datatype.boolean(),
        },
        heartRate: {
          resting: faker.datatype.number({ min: 60, max: 100 }),
        },
        bloodOxygen: {
          averageSpO2: faker.datatype.number({ min: 90, max: 100 }),
        },
        dailySteps: faker.datatype.number({ min: 1000, max: 15000 }),
        sleepData: {
          averageDurationHours: faker.datatype.number({ min: 4, max: 12 }),
          frequentAwakenings: faker.datatype.boolean(),
        },
        eveningBodyTemperature: faker.datatype.float({ min: 36.5, max: 37.5 }),
        waistCircumference: faker.datatype.number({ min: 60, max: 120 }),
        bloodPressure: {
          systolic: faker.datatype.number({ min: 110, max: 140 }),
          diastolic: faker.datatype.number({ min: 70, max: 90 }),
        },
        bodyWeight: faker.datatype.number({ min: 50, max: 120 }),
        bodyMassIndex: faker.datatype.float({ min: 18.5, max: 30 }),
        waterIntake: faker.datatype.number({ min: 1000, max: 3000 }), // in milliliters
        caffeineIntake: {
          cupsOfCoffee: faker.datatype.number({ min: 0, max: 5 }),
        },
      });
    }

    await HealthData.insertMany(fakeEntries);

    return NextResponse.json({
      status: 200,
      message: "Health data populated successfully",
      entries: fakeEntries, // Optionally return the created entries for confirmation
    });
  } catch (error) {
    console.error("Error populating health data:", error);
    return new Response("Error occurred during health data population", {
      status: 500,
    });
  }
}
