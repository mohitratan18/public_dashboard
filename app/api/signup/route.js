import connect from "@/lib/db";
import user from "@/lib/models/user";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const LoadDB = async () => {
  await connect();
};
LoadDB();

export async function GET(request) {
  console.log("GEt request for signup");
}
export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(name,email,password);
  
  try {
    if (name && email && password) {
      const check = await user.findOne({ email });
      console.log(check);
      
      if (check) {
        console.log("hello");
        
        return NextResponse.json(
          { msg: "User already exists" },
          { status: 401 }
        );
      }
      const User = await user.create({
        name,
        email,
        password,
      });
      const data = {
        user: {
          id: User._id,
        },
      };
      const authtoken = jwt.sign({
        _id: User._id,
        email: User.email,
      },"mohitratan6317");
      return NextResponse.json({ msg: "Signup sucessfull" ,authtoken}, { status: 200 });
    } else {
      return NextResponse.json(
        { msg: "Please fill all the fields" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "Error occured Please try again" },
      { status: 400 }
    );
  }
}
