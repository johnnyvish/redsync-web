import { NextResponse } from "next/server";

async function findNearestFastFood(latitude, longitude) {
  return 150;
}

export async function GET(request) {
  try {
    const req = await request.json();
    const latitude = req.latitude;
    const longitude = req.longitude;

    const distance = await findNearestFastFood(latitude, longitude);

    return new NextResponse(JSON.stringify({ result: distance }), {
      status: 200,
    });
  } catch (error) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
