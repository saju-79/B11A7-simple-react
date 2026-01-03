import { useEffect, useState } from "react";

const Allditels = ({data }) => {
    const[info ,setInfo] = useState([])
    const[peice ,setprice] = useState(0)
   
      useEffect(()=>{
          setInfo(data)   
    
    
      }, [data])
    return (
        <div className="">
            <div className=' mt-10 w-full rounded-sm  items-center  flex justify-between'>
               <h className='text-start font-semibold text-lg'>Total bids Amount</h>
                <th className='text-start font-semibold text-xl' > ${peice}</th> 
                
                </div>
         <div className="card bg-base-100 w-full  shadow-sm mt-5">
  <figure>
    <img
    className="w-full h-45"
    src={info.image}
    alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{info.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button onClick={()=>setprice(data.currentBidPrice)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
    );
};

export default Allditels;





 

 

 

 



