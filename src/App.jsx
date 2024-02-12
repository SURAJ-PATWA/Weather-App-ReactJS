import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import img from "./assets/img.png"
import './App.css'

function App() {
  const [data, setdata] = useState(null);
  const [city, setcity] = useState("indore")
  function fun(e){
    setcity(e.target.value);
    console.log(e.target.value);
  }
  useEffect(() => {
    const fetchapi =async()=>{
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1abd81f47cca57118da172c3ad17cf4`
      const response = await fetch(url);
      const result= await response.json();
      console.log(result); 
      setdata(result.main); //data =
    }
    fetchapi();
  
 
  }, [city])
  

  return (
  <>
  <div className='bg-green-900 w-[80rem] h-[100vh] m-[-2rem]'>
  <input type="text" className='bg-black text-white mt-12 pt-2 rounded-[2rem] font-extrabold text-center text-lg' onChange={fun} />
  {
    !data?(
      <div className='font-extrabold text-[#383CC1] text-[3rem] mt-4'>data not found</div>
    ):(

<div className='w-[20rem] h-[20rem] ml-[30rem] mt-4 rounded-[5rem] text-white font-extrabold text-2xl  bg-black'>
  <img src={img} className=" w-[200px] h-[200px]  rounded-3xl pt-9 pl-14"/>
  <h1>{data.temp}</h1> </div>
    )
  }
  </div>
  </>
  )
}

export default App