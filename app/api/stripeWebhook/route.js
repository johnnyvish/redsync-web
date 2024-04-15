import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import connectDB from "@/lib/mongodb"; // Ensure this is correctly imported
import User from "@/models/user"; // Your user model

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

export async function POST(request) {
  await connectDB(); // Ensure MongoDB connection is established

  const body = await request.text();
  const endpointSecret = process.env.STRIPE_SECRET_WEBHOOK_KEY;
  const sig = headers().get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    console.log("Stripe Event Received:", event);
  } catch (err) {
    console.log("Error in webhook signature verification:", err);
    return new NextResponse(`Webhook Error: ${err}`, {
      status: 400,
    });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSession = event.data.object;
        console.log("Checkout Session Completed:", checkoutSession);

        // Assuming checkoutSession.customer is the ID of the Stripe Customer
        const user = await User.findOne({
          email: checkoutSession.customer_details.email,
        });
        if (user) {
          user.stripeSubscriptionId = checkoutSession.subscription; // Update with new subscription ID
          await user.save();
          console.log("User subscription updated successfully.");
        } else {
          console.log("No user found with this Stripe Customer ID.");
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error("Error processing event:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }

  return new NextResponse("Webhook processed", {
    status: 200,
  });
}
