import React from 'react';
import Expert from '../Expert/Expert';
import expert1 from '../../../images/expert1.png'
import expert2 from '../../../images/expert2 (2).png'
import expert3 from '../../../images/expert3.png'
import expert4 from '../../../images/expert4.jpg'
import expert5 from '../../../images/expert5.png'
import expert6 from '../../../images/expert6 .png'

const Experts = () => {
    const experts = [
        { id: 1, name: 'kdsfhiaodfsa', img: expert1 },
        { id: 2, name: 'kdsfhiaodfsa', img: expert2 },
        { id: 3, name: 'kdsfhiaodfsa', img: expert3 },
        { id: 4, name: 'kdsfhiaodfsa', img: expert4 },
        { id: 5, name: 'kdsfhiaodfsa', img: expert5 },
        { id: 6, name: 'kdsfhiaodfsa', img: expert6 }
    ]
    return (
        <div id='experts'>
            <h1 className='text-center text-primary'>This is Experts</h1>
            <div className="container">
                <div className="row">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;