import React from 'react'
import { FaCheck } from 'react-icons/fa'

const TransparentPricing = () => {
    return (
        <div className='bg-gray-50 pb-10 md:pb-20'>
            <div className='container px-5 md:px-0  '>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-black mb-4'>
                        Simple, Transparent Pricing
                    </h2>
                    <p className='text-xl font-bold'>
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>

                    
                    <div className='bg-white rounded-2xl shadow p-8 flex flex-col gap-4'>
                        <div>
                            <h2 className='text-2xl font-bold'>Starter</h2>
                            <p className='text-gray-500 text-sm'>Perfect for getting started</p>
                        </div>
                        <div>
                            <span className='text-5xl font-black'>$0</span>
                            <span className='text-gray-500'>/Month</span>
                        </div>
                        <ul className='space-y-3 flex-1'>
                           
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' /> Access to 10 free tools</li>

                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' /> Basic templates</li>
                            
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Community support</li>
                            
                              <li className="flex item-center items-center gap-2"><FaCheck className='text-green-500' />1 project per month</li>
                      
                        </ul>

                        <button className='mt-4 w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold'>
                            Get Started Free
                        </button>
                    </div>

                    
                    <div className='relative bg-gradient-to-b from-violet-600 to-purple-500 rounded-2xl shadow-xl p-8 flex flex-col gap-4 text-white scale-105 my-[20px] '>
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                            <span className='bg-yellow-300 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full'>Most Popular</span>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold'>Pro</h2>
                            <p className='text-white/70 text-sm'>Best for professionals</p>
                        </div>
                        <div>
                            <span className='text-5xl font-black'>$29</span>
                            <span className='text-white/70'>/Month</span>
                        </div>

                        <ul className='space-y-3 flex-1'>
                           
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Access to all premium tools</li>

                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' /> Unlimited templates</li>
                            
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Priority support</li>
                            
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Unlimited projects</li>
                            
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Cloud sync</li>

                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Advanced analytics</li>
                      
                        </ul>
                        <button className='mt-4 w-full py-3 rounded-full bg-white text-violet-700 font-semibold'>
                            Start Pro Trial
                        </button>
                    </div>

                    
                    <div className='bg-white rounded-2xl shadow p-8 flex flex-col gap-4'>
                        <div>
                            <h2 className='text-2xl font-bold'>Enterprise</h2>
                            <p className='text-gray-500 text-sm'>For teams and businesses</p>
                        </div>
                        <div>
                            <span className='text-5xl font-black'>$99</span>
                            <span className='text-gray-500'>/Month</span>
                        </div>
                        <ul className='space-y-3 flex-1'>
                           
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Everything in Pro</li>

                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Team collaboration</li>
                            
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Custom integrations</li>
                            
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Dedicated support</li>
                            
                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />SLA guarantee</li>

                            <li className="flex item-center gap-2 items-center "><FaCheck className='text-green-500' />Custom branding</li>
                      
                        </ul>
                        <button className='mt-4 w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold'>
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TransparentPricing