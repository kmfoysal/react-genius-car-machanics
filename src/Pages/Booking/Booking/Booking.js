import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
            <br /> <br />
            <h2>Details of {service.name}</h2>
            <br /><br />
            <img src={service.imageUrl} alt="" />
            <br />
            <p>{service.description}</p>
            <h4>Price : {service.price}</h4>

        </div>
    );
};

export default Booking;