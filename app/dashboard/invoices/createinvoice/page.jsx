"use client";

import axios from "axios";
import React, { useState } from "react";
import back_button from "@/public/back_button.png";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [status, setStatus] = useState("Pending");
  const [name, setName] = useState("");
  const [amount, setamount] = useState("");
  const [email, setemail] = useState("");
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("amount", amount);
      formData.append("status", status);
      const response = await axios.post("/api/invoice", formData);
      if (response.status == 200) {
        alert("Invoice created successfully");
      }
    } catch (error) {
      alert("Any error occured please try again");
    }
  };

  return (
    <div className=" col-span-5 p-8 flex justify-start  flex-col gap-8 max-w-[400px] sm:max-w-full">
      <div className="font-medium text-3xl flex gap-4 items-center">
        <Link href="/dashboard/invoices">
          <Image src={back_button} alt={"<-"} width={24} height={18} />
        </Link>{" "}
        Create a new invoice
      </div>
      <input
        type="text"
        placeholder="name"
        className="border border-gray-500 p-4 w-full"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="email"
        className="border border-gray-500 p-4 w-full"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="amount in dollars"
        className="border border-gray-500 p-4 w-full"
        onChange={(e) => {
          setamount(e.target.value);
        }}
      />
      <div className="flex flex-row gap-12 justify-center items-center">
        <p>Status of the transaction</p>
        <select
          name="status"
          id="status"
          className="border border-solid p-4 border-black"
          placeholder="status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>paid</option>
        </select>
      </div>
      <button
        className="bg-green-500 hover:bg-green-300 p-4 rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Page;
