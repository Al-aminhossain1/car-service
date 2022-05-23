import React from 'react';
import Benar from './Benar/Benar';
import Experts from './Experts/Experts';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Benar></Benar>
            <Services></Services>
            <Experts></Experts>
        </div >
    );
};

export default Home;