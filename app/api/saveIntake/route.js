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
    await connectDB();
    const { syncCode, key, value } = await req.json(); // Assuming syncCode, key, and value are sent in the request body

    // Fetch health data
    console.log(key, value);
    const healthData = await fetchHealthDataBySyncCode(syncCode);

    if (!healthData) {
      return NextResponse.json({
        status: 404,
        message: "Health data not found",
      });
    }

    // Update the intake data
    const updateResult = await HealthData.updateOne(
      { syncCode },
      { $set: { [`Intake.${key}`]: value } }
    );

    if (updateResult.nModified === 0) {
      return NextResponse.json({
        status: 400,
        message: "Failed to update intake data",
      });
    }

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
