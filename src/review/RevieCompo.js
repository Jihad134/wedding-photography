import React, { useEffect, useState } from 'react';
import useTitle from '../Pages/usetitle/Usetitle';
import {  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RevieCompo = ({review,deleteUser}) => {
    const {message,service,serviceName,_id}=review ||{}
    const [services,setSerVices]=useState()
    console.log(services)
    useEffect(()=>{
        fetch(`https://assignmet-11-photography.vercel.app/serviceAll/${service}`)
        .then(res =>res.json())
        .then(data =>setSerVices(data))
    },[service])
    console.log(review)
    useTitle('My Review')
    
    return (
        <div>
            
            <div className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
            <div className='flex '>
           {
           services?.img &&
           <img style={{"height":"56px","width":"56px" ,}} src={services?.img} alt="Shoes" className="rounded-full" />}
              <span className="card-title ml-5">{serviceName}</span>
            </div>
            <p>{message}</p>
              <div>
                <span onClick={()=>deleteUser(_id)} className='btn btn-primary mr-5'><button>Delete</button></span>
                <span className='btn btn-primary'><button><Link to={`/update/${_id}`}>Update</Link></button></span>
              </div>
            </div>
          </div>
        </div>
    );
};

export default RevieCompo;