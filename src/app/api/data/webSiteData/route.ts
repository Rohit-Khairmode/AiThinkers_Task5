import { readWebSiteData, writeWebSiteData } from "@/utils/fileHandler";
import { WebSiteStatDetailsInputFile } from "@/utils/zodSchema";
import { NextResponse } from "next/server";

export async function GET(req: Request, _: NextResponse) {
  const webSiteData = readWebSiteData();
  return NextResponse.json(webSiteData);
}
export async function PUT(req: Request, _: NextResponse) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    if (file.type !== "application/json") {
      return NextResponse.json(
        { error: "Only JSON files are allowed" },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileData = JSON.parse(buffer.toString());

    const validation = WebSiteStatDetailsInputFile.safeParse(fileData);

    if (!validation.success) {
      console.error("Validation Error:", validation.error);
      return NextResponse.json(
        { error: "Data in file is not in the correct format." },
        { status: 400 }
      );
    }


    writeWebSiteData(fileData);

    return NextResponse.json(fileData);
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
