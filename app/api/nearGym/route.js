import { NextResponse } from "next/server";

function calculateDistance(lat1, lon1, lat2, lon2) {
  const rad = (deg) => deg * (Math.PI / 180);

  const R = 6371;

  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance * 1000;
}

async function findNearestGym(latitude, longitude) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const radius = 5000;
  const type = "gym";
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const nearestGym = data.results[0];

    const distance = calculateDistance(
      latitude,
      longitude,
      nearestGym.geometry.location.lat,
      nearestGym.geometry.location.lng
    );

    // const earthImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${nearestGym.geometry.location.lat},${nearestGym.geometry.location.lng}&zoom=18&size=600x300&maptype=satellite&key=${apiKey}`;

    return {
      distance,
      name: nearestGym.name,
      address: nearestGym.vicinity,
    };
  } catch (error) {
    console.error("Failed to find nearest gym:", error);
    throw new Error("Failed to find nearest gym");
  }
}

export async function POST(request) {
  try {
    const req = await request.json();
    const latitude = req.latitude;
    const longitude = req.longitude;

    const result = await findNearestGym(latitude, longitude);

    return new NextResponse(JSON.stringify(result), {
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
