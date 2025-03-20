import { readTabsDetails, writeTabsDetails } from "@/utils/fileHandler";
import { TabUpdateSchema } from "@/utils/zodSchema";
import { NextResponse } from "next/server";

export async function GET(req: Request, _: NextResponse) {
  const tabsDetails = readTabsDetails();
  return NextResponse.json(tabsDetails);
}
export async function PATCH(req: Request, _: NextResponse) {
  try {
    const tabsDetails = readTabsDetails();
    const body = await req.json();

    const validation = TabUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.toString() },
        { status: 400 }
      );
    }
    if (isNaN(Number(body.countChange))) {
      return NextResponse.json(
        { error: "Count Change Percentqage must be a number" },
        { status: 400 }
      );
    }
    let returnData;
    for (let i = 0; i < tabsDetails.length; i++) {
      if (tabsDetails[i].title === body.title) {
        tabsDetails[i].count = body.count;
        tabsDetails[i].countChange = body.countChange;
        returnData = tabsDetails[i];
        break;
      }
    }
    if (returnData === undefined) {
      return NextResponse.json({ error: "Tab not found" }, { status: 404 });
    }
    writeTabsDetails(tabsDetails);
    return NextResponse.json(returnData);
  } catch (error) {
    console.error("In data/tabs patch ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
