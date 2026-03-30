import React from 'react';
import {FaCheck} from "react-icons/fa";

const getTagColor = (tagType) => {
    if (tagType === 'best-seller') return 'bg-orange-100 text-orange-600'
    if (tagType === 'popular') return 'bg-purple-100 text-purple-600'
    if (tagType === 'new') return 'bg-green-100 text-green-600'
}

const MainCard=({item}) => {
    console.log( item )
    return (

        <div  className='relative border border-gray-300 rounded-2xl p-6 bg-white flex flex-col gap-4'>
        
      
        <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${getTagColor(item.tagType)}`}>
            {item.tag}
        </span>

       
            <div className=''>
                <img className="border p-4 rounded-full" src={item.image} alt="" />
                </div>

        
        <div>
            <h2 className='text-xl font-bold'>{item.name}</h2>
            <p className='text-gray-500 text-sm mt-1'>{item.description}</p>
        </div>

   
        <div>
            <span className='text-3xl font-black'>${item.price}</span>
            <span className='text-gray-500 text-sm'>/{item.period === 'monthly' ? 'Mo' : 'One-Time'}</span>
        </div>

      
        <ul className='space-y-2 flex-1'>
            {item.features.map(feature => (
                <li key={feature} className='flex items-center gap-2 text-sm text-gray-600'>
                    { <FaCheck className='text-green-500' />}
                    {feature}
                </li>
            ))}
        </ul>

       
        <button className='w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold'>
            Buy Now
        </button>

    </div>
    );
};

export default MainCard;