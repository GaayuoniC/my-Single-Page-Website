import { Life } from "../pages/Life"
import {Cv} from "../pages/Cv"
import {Contact} from "../pages/Contact"
import { HomePage } from "./HomePage"

import { useState } from "react"

export function RootLayout(){

  const [currentPage, setCurrentPage]= useState('')

  function handleSelectCurrentPage(text){
    setCurrentPage(text)
  }



  return   (<>
 
 <ul className="header-container" >
   
      <li onClick={()=> handleSelectCurrentPage('home')} >Home</li>
      <li onClick={()=>handleSelectCurrentPage('life')}>Life</li> 
        <li onClick={()=>handleSelectCurrentPage('cv')}>CV</li>
      <li onClick={()=>handleSelectCurrentPage('contact')}>Contact</li> 
  </ul>

  
 {currentPage === 'cv' && <Cv/>}
  {currentPage === 'contact' && <Contact/>}  
  {
    currentPage === 'life' && <Life/>
  }
  {currentPage === 'home' && <HomePage/> }</>)
    
}