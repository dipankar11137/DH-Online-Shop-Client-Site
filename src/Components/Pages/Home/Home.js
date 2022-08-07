import React from 'react';
import Banner from './Banner';
import IntroductionHome from './IntroductionHome';
import PrintClothes from './PrintClothes';

const Home = () => {
    return (
        <div className='p-1'>
            <Banner />
            <IntroductionHome />
            <PrintClothes />
            <h1> Home</h1>
        </div>
    );
};

export default Home;