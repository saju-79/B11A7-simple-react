import React, { useEffect, useState} from 'react';
import Ditel from './Ditel';
const Ditels = ({ handelComment  }) => {

    const [ datas , setDatas] = useState([])
         
    
    useEffect( ()=>{
        fetch("https://raw.githubusercontent.com/saju-79/B11A7-API/refs/heads/main/%3F%3D%3Dall%20/%3F%3D%3Did")
        .then((res) => res.json())
        .then((data) =>setDatas(data))
        
          
    },[])
     
    return (

            <div>
         <table className='border border-gray-300 w-full rounded-sm justify-center flex-col '>
           <tr className='border- border-gray-300 p-2'> 
            <th className='border border-gray-300 p-2 '> Items</th>
            <th className='border border-gray-300 p-2'>Current Bid </th>
            <th className='border border-gray-300 p-2'>Time Left </th>
            <th className='border border-gray-300 p-2'>Bid Now </th>
              
            </tr>
           
            
                {
               datas.map(data =><Ditel     handelComment= { handelComment}  data={data} key={data.id}></Ditel>)
            }

           </table>
            
        </div>
    );
};

export default Ditels;