import React from 'react';
import bannerImg from '../../assets/images/banner-removebg-preview.png'

const Home = () => {
    return (
        <div className='w-10/12 mx-auto flex items-center justify-between'>
            <h1 className='text-4xl font-medium'>
                Whereever your go <br />
                Go with all your heart.
            </h1>
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Home;