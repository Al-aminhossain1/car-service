import React from 'react';
import notFount from '../../images/notFount.jpg'

const NotFount = () => {
    return (
        <div>
            <h1 className='text-center text-danger my-3' > pages is not Fount</h1>
            <div className='d-flex justify-content-center'>
                <img src={notFount} alt="" />
            </div>
        </div>
    );
};

export default NotFount;