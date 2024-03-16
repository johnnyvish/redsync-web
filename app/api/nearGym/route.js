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
  const radius = 5000; // You may adjust this value based on your requirements
  const type = "gym";
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    let nearestGym = null;
    let shortestDistance = Infinity; // Initialize with a very large number

    // Iterate over each gym found and calculate the distance
    for (const gym of data.results) {
      const distance = calculateDistance(
        latitude,
        longitude,
        gym.geometry.location.lat,
        gym.geometry.location.lng
      );

      // Update the nearestGym if this gym is closer than previous ones
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestGym = gym;
      }
    }

    // Return details of the nearest gym, if one is found
    if (nearestGym) {
      return {
        distance: shortestDistance,
        name: nearestGym.name,
        address: nearestGym.vicinity,
      };
    } else {
      throw new Error("No gym found within the specified radius.");
    }
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
