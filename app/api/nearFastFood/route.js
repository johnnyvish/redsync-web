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

  return distance * 1000; // Return distance in meters
}

async function findNearestFastFood(latitude, longitude) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Accessing the API key
  const radius = 1000; // Search within a 1-kilometer radius
  const type = "restaurant"; // Using 'restaurant' type for broader results
  const keyword = "fast food"; // Keyword to narrow down to fast food restaurants
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&keyword=${encodeURIComponent(
    keyword
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length === 0) {
      throw new Error("No fast food restaurants found nearby");
    }
    const nearestFastFood = data.results[0]; // Assuming the first result is the nearest

    const distance = calculateDistance(
      latitude,
      longitude,
      nearestFastFood.geometry.location.lat,
      nearestFastFood.geometry.location.lng
    );

    // Including fast food name and address
    return {
      distance, // Distance in meters
      name: nearestFastFood.name, // Fast food name
      address: nearestFastFood.vicinity, // Fast food address
    };
  } catch (error) {
    console.error("Failed to find nearest fast food:", error);
    throw new Error("Failed to find nearest fast food");
  }
}

export async function POST(request) {
  try {
    const req = await request.json();
    const latitude = req.latitude;
    const longitude = req.longitude;

    const result = await findNearestFastFood(latitude, longitude);

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
