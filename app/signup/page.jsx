"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
// import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';


const Page = () => {
  const router = useRouter();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignup = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await axios.post("/api/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status == 200) {
        localStorage.setItem("jwt",response.data.authtoken);
        router.push("/dashboard");
      } else {
        console.log(response.data);
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="bg-blue-500 min-w-[100vw] p-4 sm:flex sm:justify-end sm:flex-col h-[80px] md:h-[150px] text-white font-medium sm:text-3xl text-xl">
        Public Dashboard
      </div>
      <div className="flex justify-center items-center sm:shadow-lg  sm:min-w-[500px] max-w-[500px] m-auto  h-[600px]  sm:mt-[50px]">
        <div className="flex flex-col justify-center items-start gap-4 p-12">
          <div className="text-2xl font-mono sm:text-3xl">
            Welcome to Public Dashboard
          </div>
          <div className="text-xl">SignUp</div>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-solid border-blue-400 w-full p-4"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="border border-solid border-blue-400 p-4 w-full"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="border border-solid border-blue-400 p-4 w-full"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            className="p-4 bg-blue-500 text-white hover:bg-blue-400 px-6 border border-solid border-blue-700 rounded-lg "
            onClick={handleSignup}
          >
            Signup
          </button>
          <p>
            Already a user?
            <Link href="/login" className="text-blue-700 p-2">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
