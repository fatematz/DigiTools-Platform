import React from 'react'
import navImg from '../public/images/DigiTools.png'
import {ShoppingCart} from "lucide-react"

const Navbar = () => {
    return (
        <div className='border-b border-gray-200 py-[16px]  '>
            <div className='container'>
                <div className='navbar bg-base-100 '>
                    <div className='navbar-start'>
                        
                        <a className='btn btn-ghost text-xl'>
                            <img className='w-full' src={navImg} alt='' />
                        </a>
                    </div>
                    <div className='navbar-center hidden lg:flex'>
                        <ul className='menu menu-horizontal px-1 gap-4'>
                            <li className="font-semibold">Products</li>
                            <li className="font-semibold">Features</li>
                            <li className="font-semibold">Pricing</li>
                            <li className="font-semibold">Testimonials</li>
                            <li className="font-semibold">FAQ</li>
                        </ul>

                        <ul></ul>
                    </div>
                    <div className='navbar-end flex gap-4'>
                        <div className=""><ShoppingCart></ShoppingCart></div>
                        <div className="">Login</div>
                        <div className="">
                            <a className='btn  bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold  rounded-full '>Get Started</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
