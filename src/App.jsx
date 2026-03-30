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

const data=async () => {
  const res=await fetch("Data.json")
  console.log(res)
  return res.json()
  
}

const sentData=data()
console.log( sentData )

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     
        <Navbar></Navbar>
     

      <Banner></Banner>

      <StatsSection></StatsSection>

      <main>
        <div className="py-[60px] md:py-[120px]">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-black">Premium Digital Tools</h2>
            <p className="text-xl font-bold">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button>Products</button>
              <button>Cart (2)</button>
            </div>
         
        
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <MainSection sentData={sentData}></MainSection>
            </Suspense>
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
