import React from 'react';
import img1 from "../../asset/img1.png"
import img2 from "../../asset/img3.jpg"
import img3 from '../../asset/img4.jpeg'

import Banneritem from '../Banneritem/Banneritem';

const Banner = () => {
    const sliderData = [
        {
            image: img1,
            prev: 3,
            title:"Romantic Wedding Titles",
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            title:"Floral Wedding Titles Pack",
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            title:"Natural Wedding Titles Pack",
            id: 3,
            next: 1
        },
       
        
    ]
    return (
        <div>
            <div className="carousel w-full py-10">
  
            {
                sliderData?.map(slider=><Banneritem
                key={slider.id}
                slider={slider}
                ></Banneritem>)
            }
         </div>
        </div>
    );
};

export default Banner;