import HealthData from "@/models/healthData";
import connectDB from "@/lib/mongodb";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const fakeEntries = [];
    for (let i = 0; i < 10; i++) {
      fakeEntries.push({
        userId: new mongoose.Types.ObjectId(),
        syncCode: faker.datatype.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        calorieIntake: {
          dailyAverage: faker.number.int({ min: 1200, max: 3500 }),
          mealIrregularity: faker.datatype.boolean(),
        },
        heartRate: {
          resting: faker.number.int({ min: 60, max: 100 }),
        },
        bloodOxygen: {
          averageSpO2: faker.number.int({ min: 90, max: 100 }),
        },
        dailySteps: faker.number.int({ min: 0, max: 20000 }),
        sleepData: {
          averageDurationHours: faker.number.int({ min: 4, max: 12 }),
          frequentAwakenings: faker.datatype.boolean(),
        },
        eveningBodyTemperature: faker.number.float({ min: 97, max: 99 }),
        waistCircumference: faker.number.float({ min: 20, max: 40 }),
        bloodPressure: {
          systolic: faker.number.int({ min: 100, max: 140 }),
          diastolic: faker.number.int({ min: 60, max: 90 }),
        },
        bodyWeight: faker.number.float({ min: 100, max: 300 }),
        bodyMassIndex: faker.number.float({ min: 15, max: 40 }),
        waterIntake: faker.number.int({ min: 1000, max: 4000 }), // in milliliters
        caffeineIntake: {
          cupsOfCoffee: faker.number.int({ min: 0, max: 5 }),
        },
      });
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
