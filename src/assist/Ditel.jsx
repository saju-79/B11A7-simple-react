import React from 'react';

const Ditel = ({data ,  handelComment }) => {
    
    return (
        <tr className=' items-center justify-center'>
                       <td className='border  border-gray-300 p-2 flex gap-2 items-center'>
                        <img className='w-20 h-20 shadow-2xl rounded-sm   ' src={data.image} alt="" />
                        <p className='text-sm font-medium'>{data.title}</p>
                       </td>
                       <td className='border border-gray-300 p-2 font-bold text-xl justify-center items-center'>{data.currentBidPrice}$</td>
                       <td className='border border-gray-300 p-2  font-medium text-ms'>{data.timeLeft}</td>
                       <td className='border border-gray-300 p-2  items-center justify-center '>


                       <button onClick={()=> handelComment(data.id)}  className="  text-[#003EA4]    justify-center text-center hover:text-red-500">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[2em]  "><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                       </button>
                        </td>
                      
                        
         </tr>
    );
};

export default Ditel;