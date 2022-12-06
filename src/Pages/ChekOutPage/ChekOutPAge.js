// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import AuthContext, { AuthProvider } from '../../AuthContext/AuthContext';

// const ChekOutPAge = () => {
//     const {user}=useContext(AuthProvider)
//     const services=useLoaderData()
//     const {title,rating,price,_id}=services;

//     const orderpost=(event)=>{
//         event.preventDefault()
//         const form=event.target
//         const name=`${form.FirstN.value} ${form.secondN.value}`
//         const email=user?.email || 'unregister'
//         const phone=form.Phone.value
//         const message=form.area.value
//         console.log(name,email,phone)

//         const order={
//             service:_id,
//             serviceName:title,
//             rating,
//             customer:name,
//             price,
//             email,
//             phone,
//             message
//         }
//         fetch('https://assignment-11-server-plum.vercel.app//order',{
//             method:"POST",
//             headers:{
//                 'content-type':"application/json"
//             },
//             body:JSON.stringify(order)
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//         })

//     }
//     return (
//         <div>
//             <form onSubmit={orderpost} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
//            <input name='FirstN' type="text" placeholder="First Name" className="input input-bordered w-full " />
//            <input name='secondN' type="text" placeholder="Last Name" className="input input-bordered w-full " />
//            <input name='Phone' type="number" placeholder="Phone Number" className="input input-bordered w-full " />
//            <input name='email' defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered w-full " />
//            <textarea className="textarea textarea-bordered"  name="area" id="" cols="80" rows="5" placeholder="Your message"></textarea><br />
//           <input type="submit" className=' btn btn-primary w-1/4' value="please order" />
//         </form>
//         </div>
//     );
// };

// export default ChekOutPAge;