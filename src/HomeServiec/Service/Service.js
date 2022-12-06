import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img:i,title,description,_id}=service;
    return (
        <div>
          
          <div className=''>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><PhotoProvider>
      <PhotoView src={i}>
        <img src={i} alt="" />
      </PhotoView>
    </PhotoProvider></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{ description.length > 100 ?
         <p>{description.slice(0,100) + '....'} <Link to={`/serviceD/${_id}`}>see more</Link></p> :
         <p>{description}</p>
        }</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`/serviceD/${_id}`}>Details</Link></button>
    </div>
  </div>
</div>

        </div>
        
        </div>
    );
};

export default Service;