import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import HealthData from "@/models/healthData";
import User from "@/models/user";

// Function to fetch health data
async function fetchHealthData(userId) {
  return HealthData.findOne({ userId });
}

// API endpoint to fetch user health data
export async function GET(req) {
  try {
    await connectDB();

    const { userId } = await req.json();

    // Check if the user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return NextResponse.json({
        status: 404,
        message: "User not found",
      });
    }

    // Fetch health data
    const healthData = await fetchHealthData(userId);
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
      data: healthData.data,
    });
  } catch (error) {
    console.error("Error fetching health data:", error);
    return new Response("Error occurred", {
      status: 500,
    });
  }
}
