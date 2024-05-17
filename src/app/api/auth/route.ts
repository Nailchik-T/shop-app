import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { serialize } from "cookie";

const prisma = new PrismaClient();

export async function POST(request: { json: () => Promise<User> }) {
  const data = await request.json();
  const { username, password } = data;
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const cookie = serialize("loggedin", "true", {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 120 * 60 * 24,
      sameSite: "strict",
      path: "/",
    });
    return NextResponse.json(
      { message: "Authentication successful", user },
      {
        headers: {
          "Set-Cookie": cookie,
        },
      },
    );
  } else {
    return NextResponse.error();
  }
}
