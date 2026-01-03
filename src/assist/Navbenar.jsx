import React from 'react';

const Navbenar = () => {
    return (
        <div className=' w-full '>
            
  <div id="item1" className="carousel-item w-full  h-120 relative">
    <img
    
      src="https://i.ibb.co.com/qLbpMwCq/Banner-min.jpg"
      className="w-full object-center bg-no-repeat" />
       <div className=' absolute   mx-18 text-start items-center justify-start mt-36 space-y-4'>
          <h1 className='text-4xl font-semibold text-[#ffffff]'>Bid on Unique Items from <br /> Around the World</h1>
          <p className=' text-[#ffffff] text-sm font-light'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
          <button className=' px-6 py-4 bg-[#ffffff] rounded-3xl text-[#000000] font-medium'>Explore Auctions</button>
       </div>
  </div>
   
   </div>
 

    );
}

export default Navbenar;