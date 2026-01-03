import React from 'react';

const Ditel = ({data}) => {
    console.log(data)
    return (
        <tr className=' items-center justify-center'>
                       <td className='border  border-gray-300 p-3 flex gap-2 items-center'>
                        <img className='w-20 h-20 shadow-2xl rounded-sm   ' src={data.image} alt="" />
                        <p className='text-sm font-medium'>{data.title}</p>
                       </td>
                       <td className='border border-gray-300 p-3 font-bold text-lg justify-center items-center'>{data.currentBidPrice}$</td>
                       <td className='border border-gray-300 p-3 font-medium text-ms'>{data.timeLeft}</td>
                       <td className='border border-gray-300 p-3 items-center justify-center'>

                        
                        <button className=' justify-center flex'>sds</button>
                        </td>
                      
                        
         </tr>
    );
};

export default Ditel;