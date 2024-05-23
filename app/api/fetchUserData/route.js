import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import HealthData from "@/models/healthData";

// Function to fetch health data using syncCode
async function fetchHealthDataBySyncCode(syncCode) {
  try {
    return await HealthData.findOne({ syncCode }).lean(); // Using .lean() for faster read-only results
  } catch (error) {
    console.error("Error fetching health data by syncCode:", error);
    throw new Error("Database query failed");
  }
}

// API endpoint to fetch user health data
export async function POST(req) {
  try {
    await connectDB();
    const { syncCode } = await req.json(); // Assuming the syncCode is sent in the request body

    if (!syncCode) {
      return NextResponse.json({
        status: 400,
        message: "syncCode is required",
      });
    }

    // Fetch user's health data
    const userHealthData = await fetchHealthDataBySyncCode(syncCode);

    if (!userHealthData) {
      return NextResponse.json({
        status: 404,
        message: "User health data not found",
      });
    }

    // Fetch global health data
    const globalHealthData = await fetchHealthDataBySyncCode("GLOBAL");

    if (globalHealthData) {
      // Append global health data to user's health data
      userHealthData.data = {
        ...userHealthData.data,
        ...globalHealthData.data,
      };
    }

    // Return the combined health data
    return NextResponse.json({
      status: 200,
      message: "Health data fetched successfully",
      data: userHealthData, // Returning the combined data
    });
  } catch (error) {
    console.error("Error fetching health data:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}
