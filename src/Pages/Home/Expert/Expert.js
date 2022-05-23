import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { img, name } = expert;
    return (
        <div className=" g-5 col-sm-12 col-md-6 col-lg-4 col-xxl-4  expert-container">

            <div className='card'>
                <img src={img} className="w-100 card-img-top" alt="..." />
                <div className="card-body expert-title">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at perspiciatis placeat, officiis expedita dicta culpa ut fuga odio veniam laudantium incidunt magni voluptates ducimus harum sunt? Dolore, accusantium eos. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
};

export default Expert;