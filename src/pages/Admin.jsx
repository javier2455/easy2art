import React from 'react'
import NavBarAdmin from '../components/Admin/NavBarAdmin'
import SideBarAdmin from '../components/Admin/SideBarAdmin'
import { AdminNavProvider } from '../context/AdminNavContext'

const Admin = () => {
  return (
    <AdminNavProvider>
      <div className='flex'>
        <SideBarAdmin />
        <NavBarAdmin />
      </div>
    </AdminNavProvider>
  )
}

export default Admin