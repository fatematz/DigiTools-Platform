import React from 'react';
import footerImg from '../public/images/DigiTools(1).png'
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-gray-900 py-[60px] md:py-[120px] text-white">
            <div className=" container  p-[20px] md:p-[20px] lg:px-[20px] xl:px-[0px]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center md:text-start ">
                    <div className="">
                        <img className="mx-auto md:mx-0" src={footerImg} alt="" />
                        <p className="mt-6">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold">Product</h2>
                        <ul className="mt-6 space-y-4">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div className="">
                         <h2 className="text-2xl font-bold">Company</h2>
                        <ul className="mt-6 space-y-4">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className="">
                         <h2 className="text-2xl font-bold">Resources</h2>
                        <ul className="mt-6 space-y-4">
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-3 ">
                      
                        <h2 className="text-2xl font-bold">Social Links</h2>

                        <div className="flex gap-5">
                            <div className="w-[30px] h-[30px] bg-white text-black flex items-center justify-center rounded-full">
                                <FaInstagram></FaInstagram>
                            </div>
                            
                            
                           

                            <div className="w-[30px] h-[30px] bg-white text-black flex items-center justify-center rounded-full">
                                <FaFacebook></FaFacebook>

                            </div>
                            
                            <div className="w-[30px] h-[30px] bg-white text-black flex items-center justify-center rounded-full">
                               <FaXTwitter></FaXTwitter>

                            </div>
                            </div>
                         
                    </div>
                </div>
                <hr className="my-[50px] border border-gray-400" />

                <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-4 ">
                <div className="">
                    <p className="">© 2026 Digitools. All rights reserved.</p>
                </div>
                <div >
                    <ul className="flex flex-wrap gap-3 md:gap-6 ">
                        <li>Privacy Policy</li>
                        <li>  Terms of Service </li>
                        <li> Cookies</li>
                    </ul>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;