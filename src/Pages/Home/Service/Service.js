import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id,name, price, description, imageUrl } = service;
    return (
        <div className="service">
            <img src={imageUrl} alt="" />
            <div className='py-3'>
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
                <p className="px-3">{description}</p>
                <Link to={`/booking/${_id}`}>
                <button className='btn btn-warning'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;