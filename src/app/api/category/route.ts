import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Category {
  name: string;
}

export async function POST(request: { json: () => Promise<Category> }) {
  try {
    const data = await request.json();
    const { name } = data;

    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });

    return NextResponse.json(newCategory);
  } catch (error) {
    console.log("Error creating category:", error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.error();
  }
}
