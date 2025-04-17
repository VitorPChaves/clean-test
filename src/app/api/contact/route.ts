import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Contact message received:", data);
  return NextResponse.json({ success: true });
}
