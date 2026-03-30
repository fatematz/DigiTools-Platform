import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     
        <Navbar></Navbar>
     

      <Banner></Banner>

      <StatsSection></StatsSection>

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
