import { NextResponse } from "next/server";
import { createComplaint } from "@/libs/apis";

export async function POST(req: Request, res: Response) {
  const { email, complaint, complaintDate, complaintTime } = await req.json();

  if (!email || !complaint) {
    return new NextResponse("All fields are required", { status: 400 });
  }

  try {
    const data = await createComplaint({
      email,
      complaint,
      complaintDate,
      complaintTime,
    });

    return new NextResponse("Complaint submitted successfully", {
      status: 200,
    });
  } catch (error: any) {
    console.log("Error Creating Complaint", error);
    return new NextResponse("Unable to create complaint", { status: 400 });
  }
}
