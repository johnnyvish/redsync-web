import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import HealthData from "@/models/healthData";

// Function to fetch health data using syncCode
async function fetchHealthDataBySyncCode(syncCode) {
  return HealthData.findOne({ syncCode }).lean(); // Using .lean() for faster read-only results
}

// API endpoint to fetch user health data
export async function GET(req) {
  try {
    await connectDB();
    const { syncCode } = await req.json(); // Assuming the syncCode is sent in the request body

    // Fetch health data
    const healthData = await fetchHealthDataBySyncCode(syncCode);
    if (!healthData) {
      return NextResponse.json({
        status: 404,
        message: "Health data not found",
      });
    }

    // Return the health data
    return NextResponse.json({
      status: 200,
      message: "Health data fetched successfully",
      data: healthData, // Directly returning the whole document
    });
  } catch (error) {
    console.error("Error fetching health data:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}
