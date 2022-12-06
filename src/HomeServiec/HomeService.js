import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service/Service';

const HomeService = () => {
    const [services,setService]=useState()
    useEffect(()=>{
        fetch('https://assignmet-11-photography.vercel.app/service')
        .then(res =>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
           <h1 className="text-center sm:text-2xl md:text-4xl lg:text-5xl font-bold">About My service</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services?.map(service=><Service
                service={service}
                >

                </Service>)
                
            }
            </div>
           <p className='my-7 text-center'> <button><Link to='/serviceall' className='btn btn-primary'>All Service</Link></button></p>
        </div>
    );
};

export default HomeService;