import React from 'react';

const Allditels = ({data}) => {
    
    console.log({data})
    return (
         <tr>
                    <td className='  p-2 flex gap-2 items-center'>
                        <img className='w-14 h-14 shadow-2xl rounded-sm ' src={data.image} alt="" />
                        <p className='text-sm font-medium'>sdsfddsfd</p>
                       </td>
                    <td>
                        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></button>
                        </td>


                </tr>
    );
};

export default Allditels;





 

 

 

 



