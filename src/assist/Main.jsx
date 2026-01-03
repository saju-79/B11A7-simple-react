import React from 'react';
import Ditels from './Ditels';
import Comment from './Comment';

const Main = (  {handelComment ,id , alldata  }) => {
    return (
        <div className='  w-11/12 mx-auto space-y-2 p-2'>
            <h1 className='text-[#0E2954] text-2xl font-medium mt-10'>Active Auctions</h1>
          <p className='text-[#000000] text-lg font-normal'>Discover and bid on extraordinary items</p>
         <div className="p-4  rounded-md gap-5 flex">
           <div className="w-3/4 p-4 bg-gray-100 rounded-lg">
            <Ditels  handelComment= { handelComment}></Ditels>
           </div>
           <div className=" w-1/4 p-4 bg-gray-100  rounded-lg ">
        <Comment id={id}  alldata={ alldata} ></Comment>
           </div>
         </div>
        </div>
    );
};

export default Main;