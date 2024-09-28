"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Page  = () => {
  const router  = useRouter();
  useEffect(() => {
    if(!localStorage.getItem("jwt")){
      router.push('/');
    }
  }, [])
  
  return (
    <div className='p-4 font-medium text-2xl'>
      welcome to Dashboard
    </div>
  )
}

export default Page 
