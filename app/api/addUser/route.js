import bcrypt from "bcrypt";
import User from "@/models/user";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

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
    return new Response("Error occurred", {
      status: 400,
    });
  }
}
