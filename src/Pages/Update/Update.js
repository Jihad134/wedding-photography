import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';

const Update = () => {
    const users=useLoaderData()
    const {message}=users
    console.log(users)
    const {user}=useContext(AuthProvider)
    const [use,setUser]=useState(users)
    
    const userUpdate=(event)=>{
        event.preventDefault()
        console.log(user)
        fetch(`https://assignmet-11-photography.vercel.app/reviews/${users._id}`,
        {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(use)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    const onblurAll=(event)=>{
        const value=event.target.value
        const filed=event.target.name
        const newUser={...use}
        newUser[filed]=value
        setUser(newUser)
        console.log(value,filed)
        
    }
    return (
        <div>
           <form onSubmit={userUpdate}>
                <input  className="file-input file-input-bordered file-input-info w-full my-3 p-5" onChange={onblurAll} type="text" defaultValue={user?.displayName}  required placeholder='Name' name="name" id="" /><br />
                <input
                 className="file-input file-input-bordered file-input-info w-full my-3 p-5"
                onChange={onblurAll} type="text" defaultValue={user?.email}  required name="email" placeholder='email' id="" /><br />
                <input  className="file-input file-input-bordered file-input-info w-full my-3 p-5" onChange={onblurAll} type="text" defaultValue={message} required name="message" placeholder='message' id="" /><br />
                <button type="submit" className='btn btn-primary'>update Review</button>
            </form>
        </div>
    );
};

export default Update;