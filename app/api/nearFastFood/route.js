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

async function findNearestFastFood(latitude, longitude) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const radius = 1000; // This limits the search to within 1 kilometer
  const type = "restaurant";
  const keyword = "fast food";
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&keyword=${encodeURIComponent(
    keyword
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length === 0) {
      throw new Error("No fast food restaurants found nearby");
    }

    let nearestFastFood = null;
    let shortestDistance = Infinity; // Initialize with a very large number

    // Iterate over each fast food restaurant found and calculate the distance
    for (const fastFood of data.results) {
      const distance = calculateDistance(
        latitude,
        longitude,
        fastFood.geometry.location.lat,
        fastFood.geometry.location.lng
      );

      // Update the nearestFastFood if this restaurant is closer than previous ones
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestFastFood = fastFood;
      }
    }

    // Return details of the nearest fast food restaurant, if one is found
    if (nearestFastFood) {
      return {
        distance: shortestDistance,
        name: nearestFastFood.name,
        address: nearestFastFood.vicinity,
      };
    } else {
      throw new Error(
        "No fast food restaurants found within the specified radius."
      );
    }
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
