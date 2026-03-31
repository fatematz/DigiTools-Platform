import React from 'react'
import navImg from '../public/images/DigiTools.png'
import { ShoppingCart } from 'lucide-react'

const Navbar = ({ cartCount }) => {
    return (
        <div className='border-b border-gray-200 py-[16px] sticky top-0 z-50 bg-white/80 backdrop-blur-md '>
            <div className='container'>
                <div className='navbar bg-base-100 '>
                    <div className='navbar-start'>
                        <a className='btn btn-ghost text-xl'>
                            <img className='w-full' src={navImg} alt='' />
                        </a>
                    </div>
                    <div className='navbar-center hidden lg:flex'>
                        <ul className='menu menu-horizontal px-1 gap-5'>
                            <li className='font-semibold text-[18px]'>
                                Products
                            </li>
                            <li className='font-semibold text-[18px]'>
                                Features
                            </li>
                            <li className='font-semibold text-[18px]'>
                                Pricing
                            </li>
                            <li className='font-semibold text-[18px]'>
                                Testimonials
                            </li>
                            <li className='font-semibold text-[18px]'>FAQ</li>
                        </ul>

                        <ul></ul>
                    </div>
                    <div className='navbar-end flex gap-4'>
                        <div className='relative cursor-pointer'>
                            <ShoppingCart />
                            {cartCount > 0 && (
                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <div className=''>Login</div>
                        <div className=''>
                            <button className='btn  bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold  rounded-full '>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
