import Sidebar from '@/components/SideBar/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='sm:grid sm:grid-cols-6'>
        <Sidebar/>
        {children}
    </div>
  )
}

export default layout
