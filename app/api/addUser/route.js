import bcrypt from "bcrypt";
import User from "@/models/user";
import HealthData from "@/models/healthData";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function POST(req) {
  try {
    await connectDB();

    const { email, password, syncCode } = await req.json();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("existing user");
      return NextResponse.json({
        status: 409,
        message: "An account with this email already exists.",
      });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    const existingHealthData = await HealthData.findOne({ syncCode });

    if (existingHealthData) {
      existingHealthData.userId = newUser._id;
      await existingHealthData.save();
    } else {
      await HealthData.create({
        userId: newUser._id,
        syncCode,
        firstName: "",
        lastName: "",
        data: "",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "User created successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      status: 500,
      message: "Error occurred",
    });
  }
}
