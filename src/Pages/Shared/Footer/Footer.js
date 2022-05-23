import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5'>
            <small>copyright@{year}</small>
        </div>
    );
};

export default Footer;