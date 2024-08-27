import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import HealthData from "@/models/healthData";

// Function to fetch health data using syncCode
async function fetchHealthDataBySyncCode(syncCode) {
  return HealthData.findOne({ syncCode }).lean(); // Using .lean() for faster read-only results
}

// API endpoint to save intake data
export async function POST(req) {
  try {
    console.log("saveIntake API reached");

    await connectDB();
    console.log("Database connected");

    const { syncCode, key, value } = await req.json(); // Assuming syncCode, key, and value are sent in the request body
    console.log(
      `Request data received - syncCode: ${syncCode}, key: ${key}, value: ${JSON.stringify(
        value
      )}`
    );

    const healthData = await fetchHealthDataBySyncCode(syncCode);
    console.log("Fetched health data:", healthData);

    if (!healthData) {
      console.log("Health data not found for syncCode:", syncCode);
      return NextResponse.json({
        status: 404,
        message: "Health data not found",
      });
    }

    // Update the intake data
    const updateResult = await HealthData.updateOne(
      { syncCode },
      { $set: { [`Intake.${key}`]: JSON.stringify(value) } }
    );
    console.log("Update result:", updateResult);

    if (updateResult.nModified === 0) {
      console.log("Failed to update intake data for syncCode:", syncCode);
      return NextResponse.json({
        status: 400,
        message: "Failed to update intake data",
      });
    }

    console.log("Intake data saved successfully for syncCode:", syncCode);
    // Return success response
    return NextResponse.json({
      status: 200,
      message: "Intake data saved successfully",
    });
  } catch (error) {
    console.error("Error saving intake data:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}
