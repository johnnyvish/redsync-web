import { NextResponse } from "next/server";

function calculateDistance(lat1, lon1, lat2, lon2) {
  // Convert degrees to radians
  const rad = (deg) => deg * (Math.PI / 180);

  // Radius of the Earth in kilometers
  const R = 6371;

  // Difference in coordinates
  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);

  // Apply Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in kilometers
  const distance = R * c;

  return distance;
}

async function findNearestGym(latitude, longitude) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Accessing the API key
  const radius = 5000; // Search within a 5-kilometer radius
  const type = "gym";
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // Assuming you have a way to calculate distance, or you can sort by proximity based on Google's ranking
    // This part is simplified; you'll need to implement logic based on your specific needs
    const nearestGym = data.results[0]; // Example: Taking the first result as the nearest for simplicity
    return calculateDistance(
      latitude,
      longitude,
      nearestGym.geometry.location.lat,
      nearestGym.geometry.location.lng
    );
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

    const distance = await findNearestGym(latitude, longitude);

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
