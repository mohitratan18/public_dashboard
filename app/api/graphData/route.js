import connect from "@/lib/db";
import { NextResponse } from "next/server";
import Invoice from "@/lib/models/invoices";

const generateMonthlyData = (data) => {
    const monthlyData = monthNames.reduce((acc, month) => {
      acc[month] = 0;
      return acc;
    }, {});
    data.forEach((item) => {
      const date = item.date;
      if (date) {
        const month = new Date(date).getMonth(); 
        const monthName = monthNames[month];
        monthlyData[monthName] += item.amount;
      }
    });
  
    const result = Object.keys(monthlyData).map((month) => ({
      month,
      amount: monthlyData[month],
    }));
  
    return result;
  };
  const totalrevenue = (data)=>{
    let total = 0;
    for(let i=0;i<data.length;i++){
        total+=data[i].amount;
    }
    return total;
  }
  

  export async function GET(request) {
    try {
        const invoicedata = await Invoice.find({});
        const monthdata = generateMonthlyData(invoicedata);
        const total = totalrevenue(invoicedata);
        console.log(monthdata);
        return NextResponse.json({invoicedata,monthdata,total});
    } catch (error) {
     console.log(error);
        
    }
  }