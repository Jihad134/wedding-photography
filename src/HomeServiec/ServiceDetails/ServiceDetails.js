import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
const ServiceDetails = () => {
  const { user } = useContext(AuthProvider)
  const [reviews,setReviews]=useState()
  console.log(reviews)
  useEffect(()=>{
    fetch(`https://assignmet-11-photography.vercel.app/reviews?service=${_id}`)
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
      setReviews(data)
    })
  },[])
  const details = useLoaderData()
  const { description, img, price, rating, title, _id } = details
  const orderpost = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.FirstN.value
    const email = user?.email || 'unregister'
    const message = form.area.value
    console.log(name, email)

    const order = {
      service: _id,
      serviceName: title,
      rating,
      photo: user?.photoURL,
      customer: name,
      price,
      email,
      message
    }
    fetch('https://assignmet-11-photography.vercel.app/reviews', {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }
  console.log(details)
  return (
    <div className='md:flex '>
      <div className="card bg-base-100 shadow-xl md:w-[50%]">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title justify-between">
            <span>{title}</span><span className='flex items-center'><span className='flex mr-5 text-orange-600'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span>{rating}</span>
          </h2>
          <h2>$: {price}</h2>
          <p>{description}</p>
          
          
        </div>
      </div>
      <div className='md:w-[50%] '>
        <div className=''>
        <div>
          <form onSubmit={orderpost} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <input name='FirstN' defaultValue={user?.displayName} type="text" placeholder="First Name" className="input input-bordered w-full " />
            <input name='email' defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered w-full " />
            <textarea className="textarea textarea-bordered" name="area" id="" cols="80" rows="5" placeholder="Your message"></textarea><br />
            <input type="submit" className=' btn btn-primary w-1/2' value="Add review" />
          </form>
        </div>
        </div>
        <div className=''>
          {
            reviews?.map(review=><><div className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
            <div className='flex '>
            <img style={{"height":"56px","width":"56px" ,}} src={user?.photoURL} alt="Shoes" className="rounded-full" />
              <span className="card-title">{user?.displayName}</span>
            </div>
              <p>{review?.message}</p>
            </div>
          </div></>)
            
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;