// pages/index.js
"use client";
import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

const data = [
  {
    month: "January",
    amount: 1200,
  },
  {
    month: "February",
    amount: 1500,
  },
  {
    month: "March",
    amount: 1800,
  },
  {
    month: "April",
    amount: 1700,
  },
  {
    month: "May",
    amount: 2000,
  },
  {
    month: "June",
    amount: 2200,
  },
  {
    month: "July",
    amount: 2500,
  },
  {
    month: "August",
    amount: 2300,
  },
  {
    month: "September",
    amount: 1900,
  },
  {
    month: "October",
    amount: 2100,
  },
  {
    month: "November",
    amount: 2400,
  },
  {
    month: "December",
    amount: 2600,
  },
];
const data01 = [
  {
    name: "paid",
    value: 2500,
  },
  {
    name: "pending",
    value: 1000,
  },
];
const totalrevenue = [{ name: "total revenue", value: 3500 }];
const RevenueChart = () => {
  return (
    <div className="w-full h-[400px] sm:w-full">
      <h2 className="text-2xl font-medium m-8">Monthly Revenue</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default function Page() {
  const [width, setwidth] = useState(null);
  useEffect(() => {
    setwidth(window.innerWidth);
  }, []);
  return (
    <div className="col-span-5 p-4 flex flex-col sm:gap-12">
      <div className="flex flex-col sm:flex-row gap-4 justify-around">
        <div className="flex flex-col justify-between items-center border-2 border-solid border-blue-300 p-4">
          <p className="font-medium text-xl ">
            Total Revenue Generated - {data01[0].value + data01[1].value}${" "}
          </p>
          <ResponsiveContainer width={width < 600 ? 300 : 450} height={250}>
            <PieChart>
              <Pie
                data={totalrevenue}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col p-4 justify-evenly items-center border-2 border-solid border-blue-300">
          <p className="font-medium text-xl ">
            Amount paid - {data01[0].value}$
          </p>
          <p className="font-medium text-xl ">
            Amount Pending - {data01[1].value}$
          </p>
          <ResponsiveContainer width={width < 600 ? 300 : 450} height={250}>
            <PieChart>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col p-4 justify-between items-center border-2 border-solid border-blue-300">
          <p className="font-medium text-xl ">
            Revenue of current month  - {data01[1].value}$
          </p>
          <ResponsiveContainer width={width < 600 ? 300 : 450} height={250}>
            <PieChart>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <RevenueChart />
    </div>
  );
}
