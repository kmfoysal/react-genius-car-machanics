import React from 'react';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" className='img-flui vh-100'/>
        </div>
    );
};

export default NotFound;