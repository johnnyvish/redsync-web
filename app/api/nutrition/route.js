import { NextResponse } from "next/server";

export const maxDuration = 300;

export async function POST(request) {
  try {
    const req = await request.json();
    const query = req.query;

    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
      query
    )}&search_simple=1&action=process&json=1`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Open Food Facts API");
    }

    const data = await response.json();

    const results = data.products;

    return NextResponse.json({ result: results }, { status: 200 });
  } catch (error) {
    console.error("Caught an error within the nutrition API", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
