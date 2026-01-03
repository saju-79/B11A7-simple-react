import React, { useEffect, useState} from 'react';
import Ditel from './Ditel';
const Ditels = () => {

    const [ datas , setDatas] = useState([])
    useEffect( ()=>{
        fetch("https://raw.githubusercontent.com/saju-79/B11A7-API/refs/heads/main/B11A7-api")
        .then((res) => res.json())
        .then((data) =>setDatas(data))
    },[])
    console.log(datas)
    return (

            <div>
         <table className='border border-gray-300 w-full rounded-sm '>
           <tr className='border- border-gray-300 p-2'> 
            <th className='border border-gray-300 p-2 '> Items</th>
            <th className='border border-gray-300 p-2'>Current Bid </th>
            <th className='border border-gray-300 p-2'>Time Left </th>
            <th className='border border-gray-300 p-2'>Bid Now </th>
              
            </tr>
           
            
                {
               datas.map(data =><Ditel data={data} key={data.id}></Ditel>)
            }

           </table>
            
        </div>
    );
};

export default Ditels;