
import { Header } from "../components/Header"
import christian from "../src/images/christian.jpeg"
import './HomePage.css'

export function HomePage()

   {return(<div className="home-container">
    <h1>Christian Gaayuoni.</h1>
   <hr/>
   <h2>Frontend Developer <br/> living in Germany.</h2>
   <div>
      <img id="main-christian-page" src= {christian} alt="christian"/>
   </div>
   </div>)
      
      
    
   
}