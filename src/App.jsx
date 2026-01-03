 
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './assist/Footer'
import Main from './assist/Main'
import Nav from './assist/Nav'
 
function App() {
  const[alldata , setAlldata] = useState([])
  const [id ,setId] = useState(0)
  useEffect( ()=>{
        fetch("https://raw.githubusercontent.com/saju-79/B11A7-API/refs/heads/main/%3F%3D%3Dall%20/%3F%3D%3Did")
        .then((res) => res.json())
        .then((data) =>setAlldata(data))
  } , [])
 const handelComment =(id)=>{
    setId( id)
 }
  
 
  return (
    <>
    <Nav></Nav>
    <div className='bg-gray-300 w-full mt-0  '>
   
     <Main  id={id} alldata={alldata}   handelComment={ handelComment} ></Main>
    </div>
    <Footer></Footer>
     
    </>
  )
}

export default App
