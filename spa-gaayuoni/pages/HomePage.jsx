
import { Header } from "../components/Header"
import { Life } from "../pages/Life"
import {Cv} from "../pages/Cv"
import {Contact} from "../pages/Contact"

import { useState } from "react"


export function HomePage(){

    const [currentPage, setCurrentPage]= useState('home')



    return <>
   {/*  <Header/> */}
   <ul className="header-container" >
     
        <li onClick={()=>setCurrentPage('home')} >Home</li>
        <li onClick={()=>setCurrentPage('life')}>Life</li> 
        {/*  <li onClick={()=>setCurrentPage('cv')}>CV</li>
        <li onClick={()=>setCurrentPage('contact')}>Contact</li> */}
    </ul>
    <h1>Chris. G</h1>
     {currentPage === 'home' && <HomePage/>}
    {currentPage === 'life' && <Life/>} 
  {/*    {currentPage === 'cv' && <Cv/>}
    {currentPage === 'contact' && <Contact/>} */} 



    
    
    
    </>
}