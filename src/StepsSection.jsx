import React from 'react'
import createImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const StepsSection = () => {
    return (
        <div className="bg-gray-50">
        <div className="container  py-[60px]  md:py-[110px] px-[20px] md:px-[20px] lg:px-[20px] xl:px-[0px]">
            <div className='text-center'>
                <h2 className="text-3xl font-black mb-4 ">Get Started in 3 Steps</h2>
                <p className="text-xl font-bold">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 '>
                <div className='relative border-2 border-gray-300 rounded-2xl px-5 pt-15 pb-10 '>
                    <button className="absolute -mt-12.5 md:-mt-10 ml-[60%] md:ml-[70%] h-10 w-10 rounded-full bg-violet-700  text-white ">01</button>
                    <div className='flex justify-center items-center bg-violet-300 w-25 h-25 rounded-full p-5 mx-auto'>
                        <img src={createImg} alt='' />
                    </div>
                    <h3 className="text-center my-2.5 text-[20px] font-bold">Create Account</h3>
                    <p className="text-center text-[16px] font-semibold">
                        Sign up for free in seconds. No credit card required to
                        get started.
                    </p>
                </div>

                <div className='relative border-2 border-gray-300 rounded-2xl px-5 pt-15 pb-10 '>
                    <button className="absolute -mt-12.5 md:-mt-10 ml-[60%] md:ml-[70%] h-10 w-10 rounded-full bg-violet-700  text-white">02</button>
                    <div className=' flex justify-center bg-violet-300 w-25 h-25 rounded-full p-5 mx-auto'>
                        <img src={packageImg} alt="" />
                    </div>
                    <h3 className="text-center my-2.5 text-[20px] font-bold">Choose Products</h3>
                    <p className="text-center text-[16px] font-semibold">
                        Browse our catalog and select the tools that fit your
                        needs.
                    </p>
                </div>

                <div className='relative border-2 border-gray-300 rounded-2xl px-5 pt-15 pb-10'>
                    <button className="absolute -mt-12.5 md:-mt-10 ml-[60%] md:ml-[70%] h-10 w-10 rounded-full bg-violet-700 text-white">03</button>
                    <div className='flex justify-center bg-violet-300 w-25 h-25 rounded-full p-5 mx-auto'>
                        <img src={rocketImg} alt="" />
                    </div>
                    <h3 className="text-center my-2.5 text-[20px] font-bold">Start Creating</h3>
                    <p className="text-center text-[16px] font-semibold">
                        Download and start using your premium tools immediately.
                    </p>
                </div>
            </div>
            </div>
            </div>
    )
}

export default StepsSection
