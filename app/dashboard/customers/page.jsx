"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Page = () => {
  const [data, setdata] = useState([]);
  const fetchdata = async () => {
    const response = await axios.get("/api/invoice");
    setdata(response.data.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="col-span-5 flex flex-col gap-4 p-8">
      <h1 className="font-medium text-3xl">Customers Data</h1>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between bg-gray-300 p-4 border border-gray-500 border-solid rounded-lg"
            >
              <div className="font-medium text-lg">{index + 1}</div>
              <div className="font-medium text-lg">{item.name}</div>
              <div className="font-medium text-lg">{item.email}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Page;
