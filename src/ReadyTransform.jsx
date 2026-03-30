import React from 'react';

const ReadyTransform = () => {
    return (
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 py-20 md:py-30  ">
            <div className="container  px-5 md:px-0 text-center space-y-4">
                <div className="">
                    <h2 className="text-2xl font-black text-white">Ready to Transform Your Workflow?</h2>
                </div>
                <div className="">
                    <p className="text-white font-semibold ">Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="btn rounded-full text-violet-800">Explore Products</button>
                    <button className="btn rounded-full bg-transparent text-white">View Pricing</button>
                </div>
                <div className="">
                    <p className="text-white font-semibold ">14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default ReadyTransform;