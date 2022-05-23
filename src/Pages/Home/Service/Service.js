import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, name, price, description } = service;
    const navigate = useNavigate();
    const handleUsenavigate = id => {
        console.log(id)
        navigate(`/service/${id}`)
    }
    return (
        <div className='container service-container'>
            <img className='w-100' src={img} alt="" />
            <h1>{name}</h1>
            <h3>Price:${price}</h3>
            <p>{description}</p>
            <button onClick={() => handleUsenavigate(id)} className='btn btn-success'>{name}</button>
        </div>
    );
};

export default Service;