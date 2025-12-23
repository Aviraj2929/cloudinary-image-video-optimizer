import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const {userId} = await auth();
  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }
  try {
    const videos = await prisma.video.findMany({
        where: {
      userId: userId, // 👈 FILTER BY USER
    },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
