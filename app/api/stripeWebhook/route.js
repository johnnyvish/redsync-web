import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

export async function POST(request) {
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

  switch (event.type) {
    case "checkout.session.async_payment_failed":
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      console.log("Async Payment Failed:", checkoutSessionAsyncPaymentFailed);
      break;
    case "checkout.session.async_payment_succeeded":
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      console.log(
        "Async Payment Succeeded:",
        checkoutSessionAsyncPaymentSucceeded
      );
      break;
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      console.log("Checkout Session Completed:", checkoutSessionCompleted);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return new NextResponse("Webhook processed", {
    status: 200,
  });
}
