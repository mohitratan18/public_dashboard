"use client";

import React, { useEffect, useState } from "react";
// import { dummy } from "./dummy";
import edit from "@/public/edit.png";
import del from "@/public/delete.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
const Page = () => {
  const [search, setsearch] = useState("");
  const [data, setdata] = useState(null);
  const fetchdata = async () => {
    const response = await axios.get("/api/invoice");
    console.log(response.data.data);
    setdata(response.data.data);
  };
  const viewall = async () => {
    try {
      const response = await axios.get("/api/invoice");
      setdata(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const Pending = async () => {
    const temp = data.filter((item) => item.status === "pending");
    setdata(temp);
  };
  const paid = async () => {
    const temp = data.filter((item) => item.status === "paid");
    setdata(temp);
  };
  const Search = async (e) => {
    e.preventDefault();
    const temp = data.filter((item) => item.email === search);
    setdata(temp);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="flex flex-col p-8 m-2 sm:col-span-5 gap-8">
      <div className="flex flex-row justify-between items-center">
        <p className="text-lg sm:text-3xl font-medium">Invoices</p>
        <Link href={"/dashboard/invoices/createinvoice"}>
          <button className="bg-green-500 p-4 sm:w-[200px] rounded-md">
            Create Invoices
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-8 justify-between sm:flex-row">
        <form onSubmit={Search} className="flex flex-row gap-4 w-full">
          <input
            type="text"
            placeholder="search invoices"
            className="sm:w-[90%] border border-solid border-black p-2 rounded-lg"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <button className="bg-blue-500 p-4 rounded-lg">search</button>
        </form>
        <div className="flex flex-row gap-4">
          <button className="bg-green-500 p-4 rounded-lg" onClick={viewall}>
            View All
          </button>
          <button className="bg-green-500 p-4 rounded-lg" onClick={Pending}>
            Filter Pending
          </button>
          <button className="bg-green-500 p-4 rounded-lg" onClick={paid}>
            Filter paid
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="sm:grid sm:grid-cols-10 flex flex-col justify-start bg-gray-100 p-6 border  border-gray-300 rounded-lg gap-3"
              >
                <div className="col-span-1 font-medium text-md">
                  {index + 1}
                </div>
                <div className="col-span-2 font-medium text-md">
                  {item.name}
                </div>
                <div className="col-span-2 font-medium text-md">
                  {item.email}
                </div>
                <div className="col-span-1 font-medium text-md">
                  {item.amount}
                </div>
                <div className="col-span-1 font-medium text-md">
                  {item.date}
                </div>
                <div className={`col-span-1 font-medium text-md`}>
                  <span
                    className={`${
                      item.status == "paid" ? "bg-green-500" : "bg-red-500"
                    } p-2 rounded-lg`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="col-span-1 font-medium text-md">
                  <Image src={edit} alt="edit" />
                </div>
                <div className="col-span-1 font-medium text-md">
                  <Image src={del} alt="delete" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Page;
