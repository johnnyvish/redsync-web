import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb"; // Ensure this is correctly imported
import User from "@/models/user"; // Your user model

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

export async function POST(req) {
  await connectDB();

  const { email } = await req.json();

  if (!email) {
    return new NextResponse("Email parameter is missing", {
      status: 400,
    });
  }

  try {
    const user = await User.findOne({ email: email });
    if (user && user.stripeSubscriptionId) {
      return new NextResponse(JSON.stringify({ isActive: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new NextResponse(JSON.stringify({ isActive: false }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (err) {
    console.error("Error retrieving user:", err);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
