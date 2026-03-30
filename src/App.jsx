import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./Navbar"
import Banner from "./Banner"
import StatsSection from "./StatsSection"
import StepsSection from "./StepsSection"
import ReadyTransform from "./ReadyTransform"
import Footer from "./Footer"
import TransparentPricing from "./TransparentPricing"
import MainSection from "./MainSection"
import Card from "./Card"

const data=async () => {
  const res=await fetch("Data.json")
  console.log(res)
  return res.json()
  
}

const sentData=data()
console.log( sentData )

function App() {
  const [count, setCount]=useState(0)
  
  const [tab, setTab]=useState(true)
  const [catchData, setCatchData]=useState([])
  
  // console.log( catchData )

  return (
    <>
      
     
        <Navbar></Navbar>
     

      <Banner></Banner>

      <StatsSection></StatsSection>

      <main>
        <div className="py-[60px] md:py-[120px] p-[20px] md:p-[0] ">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-black">Premium Digital Tools</h2>
            <p className="text-xl font-bold my-4">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            
            <div className="flex flex-wrap gap-4 p-2 rounded-full justify-center items-center border border-gray-400 w-fit mx-auto 
            ">

              <button onClick={() => setTab(true)} className={` btn rounded-full ${tab===true? " bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold":" "}`} > Products </button>
              
              <button onClick={() => setTab(false)} className={` btn rounded-full ${tab===false? " bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold":" "}`} >Cart ({catchData.length})</button>
            </div>

           
         {tab === true ? (<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <MainSection sentData={sentData} catchData={catchData} setCatchData={setCatchData} ></MainSection>
            </Suspense>):(
                <Card catchData={catchData} setCatchData={setCatchData}></Card>
            )}
        
        
             </div>
        </div>
      </main>

      <StepsSection></StepsSection>

      <TransparentPricing></TransparentPricing>

      <ReadyTransform></ReadyTransform>
      
    <Footer></Footer>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
