import React from 'react';
import Allditels from './Allditels';
 
 
 
 

const Comment = ({id ,alldata}) => {
    return (
        <div>
            <div className=" justify-center items-center">
                <h1 className='justify-center text-center mt-2 font-bold text-2xl text-[#0E2954]'>Favorite Items</h1>
                <h1 className='justify-center text-center mt-6 font-semibold text-xl text-[#000000]'>No favorites yet</h1>
                <p className='text-sm text-[#00000] mt-1 text-center'>Click the heart icon on any item to add it to your favorites</p>
            </div>
           
            {
             alldata.map((data) => data.id === id && <Allditels data={data} id={id}    ></Allditels>  )
          
            }   
                
                 

        </div>
    );
};

export default Comment;