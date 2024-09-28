import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='col-span-1 bg-[#F9FAFC] sm:min-h-[100vh] p-4'>
        <div className='bg-blue-500 min-h-[170px] flex flex-col justify-end p-4 rounded-lg'>
            <p className='font-medium text-2xl text-white'>Public Dashboard</p>
        </div>
        <nav className='flex sm:flex-col gap-4 p-4 text-lg flex-row'>
            <Link href={"/dashboard/home"} className='bg-white rounded-lg p-4 active:bg-blue-300'>Home</Link>
            <Link href={"/dashboard/invoices"} className='bg-white rounded-lg p-4'>Invoices</Link>
            <Link href={"/dashboard/customers"} className='bg-white rounded-lg p-4'>Customer</Link>
        </nav>
    </div>
  )
}

export default Sidebar
