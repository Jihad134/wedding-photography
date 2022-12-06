import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../AuthContext/AuthContext';
import OrderRow from '../OrderROw/OrderRow';

const Order = () => {
    const {user}=useContext(AuthProvider)
    const [orders,setOrders]=useState([])
    console.log(orders)
    useEffect(()=>{
        fetch(`https://assignmet-11-photography.vercel.app/order?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>setOrders(data))
    },[user?.email])
    return (
        <div>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        orders?.map(order=><OrderRow
        key={order._id}
        order={order}
        ></OrderRow>)
     }
    </tbody>
   
  
    
  </table>
</div>
        </div>
    );
};

export default Order;