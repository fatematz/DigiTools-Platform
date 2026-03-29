import React from 'react'
import bannerImg from '../assats/banner.png'
import {Play} from "lucide-react"

const Banner = () => {
    return (
        <div className='container flex justify-between'>
            <div className=''>
                <div className=''>
                    <span>New: AI-Powered Tools Available</span>
                </div>

                <div className=''>
                    <h1>Supercharge YourDigital Workflow</h1>
                </div>

                <div className=''>
                    <p>
                        Access premium AI tools, design assets, templates, and
                        productivity software—all in one place. Start creating
                        faster today. Explore Products
                    </p>
                </div>

                <div className=''>
                    <button>Explore Products</button>
                    <button><Play></Play> Watch Demo</button>
                </div>
            </div>

            <div className="">
            <div className=''>
                <img src={bannerImg} alt='' />
                </div>
                </div>
        </div>
    )
}

export default Banner
