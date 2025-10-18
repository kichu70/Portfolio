import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);


  useEffect(()=>{
    const handleclickOutside=(e)=>{
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown",handleclickOutside);
    return()=>{
      document.removeEventListener("mousedown",handleclickOutside)
    }
  },[])

const handleClick= (sectionId)=>{
  const section = document.getElementById(sectionId)
  if(section){
    section.scrollIntoView({behavior:'smooth'})
  }
}

  return (
    <div className='navbar'>
      <div className="nav">
        <button id="logo">ANSIF</button>
        <button id='logo2'>A<span>nsif</span></button>
        <div className="menu">
            <button onClick={()=>handleClick("home")}>AboutMe</button>
            <button onClick={()=>handleClick("crt")}>certificates</button>
            <button onClick={()=>handleClick("experiance")}>Experiance</button>
            <button onClick={()=>handleClick("education")}>Qualification</button>
        </div>
        <div className="mblCntere">
         <h6>Muhammed &nbsp;Ansif</h6>
        </div>
        <button id='mblMenuBtn' onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen&&(
        <div ref={menuRef} className="mblMenu" id='mblMenu'>
            <button onClick={()=>handleClick("home")}>AboutMe</button>
            <button onClick={()=>handleClick("crt")}>certificates</button>
            <button onClick={()=>handleClick("experiance")}>Experiance</button>
            <button onClick={()=>handleClick("education")}>Qualification</button>

        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
