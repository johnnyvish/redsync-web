import HealthData from "@/models/healthData";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  try {
    await connectDB();

    const { syncCode } = await req.json();
    const healthData = await HealthData.findOne({ syncCode: syncCode });

    if (!healthData) {
      return new Response(
        JSON.stringify({
          isValid: false,
          message: "Invalid sync code.",
        }),
        {
          status: 404,
        }
      );
    }

    return new Response(
      JSON.stringify({
        isValid: true,
        message: "Sync code is valid.",
        healthDataId: healthData._id,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error verifying sync code:", error);
    return new Response("Error occurred during sync code verification", {
      status: 500,
    });
  }
}
