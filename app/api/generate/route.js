
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const url = body.url?.trim();
    const shorturl = body.shorturl?.trim();

    if (!url || !shorturl) {
      return NextResponse.json(
        { success: false, error: "URL and short name are required" },
        { status: 400 }
      );
    }

    let parsedUrl;

    try {
      parsedUrl = new URL(url);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid URL" },
        { status: 400 }
      );
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return NextResponse.json(
        { success: false, error: "Only HTTP and HTTPS URLs are allowed" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const existing = await collection.findOne({ shorturl });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error: "Short name is already used",
        },
        { status: 409 }
      );
    }

    await collection.insertOne({ url, shorturl });

    return NextResponse.json({
      success: true,
      error: null,
      message: "URL generated successfully",
      shorturl,
    });
  } catch (error) {
    console.error("POST /api/generate failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate URL. Please try again.",
      },
      { status: 500 }
    );
  }
}
