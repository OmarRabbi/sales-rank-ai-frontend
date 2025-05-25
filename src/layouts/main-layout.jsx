import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/main/shared/navbar'
import Footer from '../components/main/shared/footer'

function MainLayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout