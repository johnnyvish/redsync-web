import bcrypt from "bcrypt";
import User from "@/models/user";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

async function comparePassword(inputPassword, userPassword) {
  return bcrypt.compare(inputPassword, userPassword);
}

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        status: 401,
        message: "Invalid email or password",
      });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return NextResponse.json({
        status: 401,
        message: "Invalid email or password",
      });
    }

    const userData = {
      id: user._id,
      email: user.email,
    };

    return NextResponse.json({
      status: 200,
      message: "Authentication successful",
      user: userData,
    });
  } catch (error) {
    console.error("Error authenticating user:", error);
    return new Response("Error occurred", {
      status: 400,
    });
  }
}
