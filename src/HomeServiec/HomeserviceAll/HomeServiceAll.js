import React, { useEffect, useState } from 'react';

import ServiceComponent from './ServiceComponent/ServiceComponent';

const HomeServiceAll = () => {
    const [serviceAll,setServiceAll]=useState([])
    useEffect(()=>{
        fetch('https://assignmet-11-photography.vercel.app/serviceAll')
        .then(res=>res.json())
        .then(data=>setServiceAll(data))
    },[])
    return (
        <div>
            <h1 className="text-center sm:text-2xl md:text-4xl lg:text-5xl font-bold">About My service</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4 md:px-0">
            
            {

             serviceAll?.map(service=><ServiceComponent
             key={service._id}
             serviceAll={service}
             ></ServiceComponent>)   
            }
         
        </div>
        </div>
        
    );
};

export default HomeServiceAll;