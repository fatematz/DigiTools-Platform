import React from 'react';

const StatsSection = () => {
    return (
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 py-[60px] mb-[120px]">
        <div className="container grid grid-cols-3 gap-[80px] text-center">
            <div className="border-r-2 border-white">
                <h1 className="text-5xl font-black text-white mb-2">50K+</h1>
                <p className="text-xl text-white">Active Users</p>
            </div>
            <div className="">
                <h1 className="text-5xl font-black text-white mb-2">200+</h1>
                <p className="text-xl text-white">Premium Tools</p>
            </div>
            <div className="border-l-2 border-white">
                <h1 className="text-5xl font-black text-white mb-2">4.9</h1>
                <p className="text-xl text-white">Rating</p>
            </div>
            </div>
            </div>
    );
};

export default StatsSection;