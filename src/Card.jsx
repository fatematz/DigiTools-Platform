import React from 'react'
import {toast} from "react-toastify";

const Card = ({ catchData, setCatchData }) => {


    const total=catchData.reduce((sum, item) => {
        return sum+item.price;
    }, 0)

    const handlePayment=() => {
        setCatchData([])
        toast.success("Proceed to Checkout")
    }

    const deleteItem=(del) => {
      
        const filterItem=catchData.filter(c => c.id!==del.id)
        
        setCatchData(filterItem)

        toast("Remove Item")
    } 



    return (
        <div className="space-y-9 mt-[40px] px-[20px] md:px-[20px] lg:px-[20px] xl:px-[0px]"> 
            <h1>Your Cart</h1>

            {
                catchData.length===0? <p className="text-center text-3xl font-black bg-gray-100 p-[40px] rounded-2xl">Your cart is empty</p>:<>
                
                
            {catchData.map((item) => (
                <div key={item.id} className="flex flex-wrap gap-2 justify-between items-center  p-[20px] rounded-2xl bg-gray-100 my-[10px] my:my-[0px] md:mt-6 ">
                    <div className='flex flex-wrap justify-center items-center gap-[20px]'>
                        <div className='w-12.5 h-12.5  p-[10px] bg-gray-300 rounded-full'>
                            <img src={item.image} alt='' />
                        </div>
                        <div className=''>
                            <h2 className="text-[20px] font-semibold"> {item.name} </h2>
                            <p className="text-[18px] font-semibold">${item.price}</p>
                        </div>
                    </div>

                    <div className="">
                        <button onClick={() => deleteItem(item)} className="btn rounded-full text-red-400">Remove</button>
                    </div>
                </div>
            ))}

            <div className="flex flex-wrap justify-between items-center  p-[10px] rounded-2xl bg-gray-50">
                <div className="">
                <h2 className="text-2xl font-bold">Total</h2>
            </div>
                <div className="text-3xl font-bold">
                    $ {total}
            </div>
            </div>

              <div className="   p-[15px] rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500">
               
                <button onClick={handlePayment} className=" w-full text-center text-white font-bold">Proceed to Checkout</button>
            
             
            </div>
                </>
            }

        </div>
    )
}

export default Card
