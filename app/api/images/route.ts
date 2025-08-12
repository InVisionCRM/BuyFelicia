import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export async function GET() {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    const { blobs } = await list({ prefix: "image/", token });

    const images = blobs
      .filter((b) => /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(b.pathname))
      .map((b) => ({
        url: b.url,
        pathname: b.pathname,
        size: b.size,
        uploadedAt: b.uploadedAt,
      }));

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json(
      { error: "Failed to list images" },
      { status: 500 }
    );
  }
}


