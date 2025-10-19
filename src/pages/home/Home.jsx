import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Content from '../../components/conents/Content'
import Cursor from '../../components/conents/Cursor/Cursor'

const Home = () => {
  return (
    <div>
      <Cursor/>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Home
