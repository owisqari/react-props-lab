import Programers from "../component/Programers"
import Companies from "../component/Companies"
import Footer from "../component/Footer"
import "../styles/Home.css"
const Home = () => {
 
  return (
    <>
    <div className="body">
      <h1>Companies:</h1>
      <div className="comp-container">   
        <Companies logo="https://avatars.githubusercontent.com/u/91183068?s=200&v=4" name = "Tuwaiq" employees="200" year="2019"/>
        <Companies logo="https://avatars.githubusercontent.com/u/91183068?s=200&v=4" name = "STC" employees="4000" year="2000"/>
        <Companies logo="https://avatars.githubusercontent.com/u/91183068?s=200&v=4" name = "Saudi airlines" employees="10000" year="1999"/>
      </div>
         
            <div className="container">    
            <Programers name = "owis" age="24" company="Tuwaiq acamedy" experience="2"/>
            <Programers name = "ahmed" age="32" company="Saudi airlines" experience="6"/>
            <Programers name = "malek" age="20" company="STC" experience="0"/>
        </div>
        <Footer/>
    </div>
    

    </>
  )
}

export default Home
