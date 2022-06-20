import React from 'react'

// import header
import Header from '../../components/Header'
// import footer
import Footer from '../../components/Footer'
// import { Outlet } from 'react-router-dom'

export default function MainLayout(props) {
  return (
      
    <>
        <Header /> 
          {props.children}
        <Footer/>
    </>
  )
}
