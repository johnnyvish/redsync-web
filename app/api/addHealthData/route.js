// import HealthData from "@/models/healthData"; // Assuming you've properly set up and exported HealthData
// import connectDB from "@/lib/mongodb";
// import { faker } from "@faker-js/faker"; // Make sure to install @faker-js/faker package
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const fakeEntries = [];
//     for (let i = 0; i < 10; i++) {
//       const firstName = faker.person.firstName();
//       const lastName = faker.person.lastName();
//       const data = faker.lorem.sentence();
//       const syncCode = faker.string.uuid(); // Using UUIDs for sync codes

//       fakeEntries.push({
//         firstName,
//         lastName,
//         data,
//         syncCode,
//       });
//     }

//     await HealthData.insertMany(fakeEntries);

//     return NextResponse.json({
//       status: 200,
//       message: "Health data populated successfully",
//       entries: fakeEntries, // Optionally return the created entries for confirmation
//     });
//   } catch (error) {
//     console.error("Error populating health data:", error);
//     return new Response("Error occurred during health data population", {
//       status: 500,
//     });
//   }
// }
