import React, { useEffect, useState } from 'react';
import RevieCompo from './RevieCompo';
const Review = () => {
    const [reviews,setReviews]=useState([])
    // console.log(reviews)
    useEffect(()=>{
        fetch('https://assignmet-11-photography.vercel.app/reviews')
        .then(res =>res.json())
        .then(data=>{
            // console.log(data)
            setReviews(data)
        })
    },[])
    const deleteUser=(id)=>{
        const agree=window.confirm(`are you sure delete ${id}`)
        console.log(id)
        if(agree){
            fetch(`https://assignmet-11-photography.vercel.app/reviews/${id}`,{
                method:"DELETE",      
            })
            .then(res =>res.json())
            .then(data =>{console.log(data)
            if(data.deletedCount >= 0){
                alert('delete succesful')
                const remaining=reviews?.filter(ors=>ors._id !== id)
                setReviews(remaining)

            }
            })
        }
    }
    return (
        <div>
            {
                reviews?.map(review=><RevieCompo
                key={review._id}
                review={review}
                deleteUser={deleteUser}
                ></RevieCompo>)
            }
        </div>
    );
};

export default Review;