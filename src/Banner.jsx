import React from 'react'
import bannerImg from '../assets/banner.png'
import { Play } from 'lucide-react'

const Banner = () => {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-start p-[20px] md:p-[0px] gap-12.5  md:gap-37.5 py-10 md:py-27.5'>
            <div className='space-y-8'>
                <div className='inline-flex items-center gap-2 bg-indigo-100 text-violet-700 font-semibold px-4 py-2 rounded-full'>
                    <span className='relative flex h-5 w-5 items-center justify-center'>
                        <span className='absolute h-5 w-5 rounded-full bg-violet-300 opacity-60'></span>
                        <span className='relative h-3 w-3 rounded-full bg-violet-600'></span>
                    </span>
                    New: AI-Powered Tools Available
                </div>

                <div className=''>
                    <h1 className='text-5xl font-bold leading-[1.2]'>
                        Super charge Your Digital Workflow
                    </h1>
                </div>

                <div className=''>
                    <p className='text-[18px] leading-[1.2] '>
                        Access premium AI tools, design assets, templates, and
                        productivity software—all in one place. Start creating
                        faster today. Explore Products
                    </p>
                </div>

                <div className='flex flex-wrap gap-4 justify-center md:justify-start '>
                    <button className='btn  bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold  rounded-full '>
                        Explore Products
                    </button>
                    <button className='flex btn font-semibold rounded-full text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white'>
                        <Play></Play> Watch Demo
                    </button>
                </div>
            </div>

            <div className=''>
                <div className='flex justify-center md:justify-end'>
                    <img src={bannerImg} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Banner
