import React, { useState } from 'react';
import useTitle from '../usetitle/Usetitle';

const AddService = () => {
    useTitle("Add service")
    const [user,setUser]=useState({})
    const onsabmit=(event)=>{
        event.preventDefault()
        console.log(user)
        fetch('https://assignment-11-server-plum.vercel.app//service',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged > 0){
                alert("user added")
                event.reset()
            }
        })
    }
    const onblurAll=(event)=>{
        const value=event.target.value
        const filed=event.target.name
        const newUser={...user}
        newUser[filed]=value
        setUser(newUser)
        console.log(value,filed)
       
    }
    return (
        <div>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-4' onSubmit={onsabmit}>
                <input className='input input-bordered text-2xl' required onBlur={onblurAll} type="text" placeholder='title' name="title" id="" /><br />
                <input className='input input-bordered text-2xl' onBlur={onblurAll} type="text" required name="price" placeholder='price' id="" /><br />
                <input className='input input-bordered text-2xl' onBlur={onblurAll} type="text" required name="img" placeholder='image' id="" /><br />
                <input className='input input-bordered text-2xl' onBlur={onblurAll} type="text" required placeholder='rating' name="rating" id="" /><br />
                <input className='input input-bordered text-2xl' onBlur={onblurAll} type="text" required name="description" placeholder='description' id="" /><br />
                <button className='btn btn-primary font-bold' type="submit">Add service</button>
            </form>
        </div>
    );
};

export default AddService;