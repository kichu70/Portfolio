import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Content from '../../components/conents/Content'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Home
