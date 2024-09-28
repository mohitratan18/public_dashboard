import connect from "@/lib/db";
import user from "@/lib/models/user";
import { NextResponse } from "next/server";
// import { jsonwebtoken } from "jsonwebtoken";
const jwt = require('jsonwebtoken');

const LoadDB = async () => {
  await connect();
};
LoadDB();

export async function GET(request) {
  console.log("WELCOME TO GET");
  return NextResponse.json({ msg: "welcomeeeee" });
}

export async function POST(request) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return NextResponse.json(
      { msg: "Please fill all fields" },
      { status: 400 }
    );
  }
  try {
    const User = await user.findOne({
      email,
    });
    if (User) {
      if (User.password == password) {
        console.log("hello");
        const data = {
            user: {
              id: User._id,
            },
          };
          const authtoken = jwt.sign({
            _id: User._id,
            email: User.email,
          },"mohitratan6317");
        return NextResponse.json({ msg: "Login Successfull",authtoken }, { status: 200 },{authtoken});
      }
      else{
        return NextResponse.json({msg:"Invalid credentials"},{status:401});
      }
    }
    return NextResponse.json({ msg: "Invalid Credentials" }, { status: 401 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Please try again" }, { status: 400 });
  }
}
