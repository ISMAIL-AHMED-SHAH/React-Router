import { useState } from 'react'

import './App.css'
// import Header from '../components/Header/Header.jsx'
import Header from '@components/Header/Header.jsx';

import Footer from '@components/Footer/Footer.jsx'
import Home from '@components/Home/Home.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
     <Home/>

      
    </>
  )
}

export default Layout