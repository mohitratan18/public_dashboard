import Invoice from "@/lib/models/invoices";
import connect from "@/lib/db";
import { NextResponse } from "next/server";
const loadDb = async () => {
  await connect();
};
loadDb();

export async function GET(request) {
  try {
    const data = await Invoice.find({});
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ msg: "Failed to fetch data please try again" });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    // const { name, email, } = formData;
    const name = formData.get("name");
    const email = formData.get("email");
    const amount = formData.get("amount");
    const date = Date.now();
    const status = formData.get("status");

    if (name && email && amount && date && status) {
      const invoice = await Invoice.create({
        name,
        email,
        amount,
        date,
        status,
      });
      console.log(invoice);
      return NextResponse.json(
        { msg: "Invoice created sucessfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { msg: "Please fill  all fields" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Please try again" });
  }
}
