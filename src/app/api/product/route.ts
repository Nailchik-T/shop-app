import { NextRequest, NextResponse } from "next/server";
import { Product } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { stat, mkdir, writeFile } from "fs/promises";
import { join } from "path";
import mime from "mime-types";
import _ from "lodash";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = (formData.get("name") as string) || null;
  const cost = parseFloat(formData.get("cost") as string) || null;
  const available = formData.get("available") === "true";
  const categoryId = parseInt(formData.get("categoryId") as string) || null;
  const image = (formData.get("image") as File) || null;

  if (!name || !cost || !categoryId || !image) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const buffer = Buffer.from(await image.arrayBuffer());
  const relativeUploadDir = `/uploads/${new Date(Date.now())
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;

  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e,
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 },
      );
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = mime.extension(image.type);
    const filename = `${image.name.replace(
      /\.[^/.]+$/,
      "",
    )}-${uniqueSuffix}.${extension}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    const fileUrl = `${relativeUploadDir}/${filename}`;

    // Save to database
    const result = await prisma.product.create({
      data: {
        name,
        cost,
        available,
        categoryId,
        image: fileUrl,
      },
    });

    return NextResponse.json({ product: result });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.error();
  }
}
export async function DELETE(request: { json: () => Promise<{ id: number }> }) {
  try {
    const { id } = await request.json();

    const deletedProduct = await prisma.product.delete({
      where: { id: id },
    });

    return NextResponse.json(deletedProduct);
  } catch (error) {
    console.log("Error deleting product:", error);
    return NextResponse.error();
  }
}
export async function PUT(request: { json: () => Promise<Product> }) {
  try {
    const data = await request.json();
    const { id, name, cost, available, categoryId } = data;

    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: {
        name,
        cost,
        available,
        categoryId,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log("Error updating product:", error);
    return NextResponse.error();
  }
}
