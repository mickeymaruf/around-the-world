import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bannerImg from '../../assets/images/banner-removebg-preview.png';
import Place from '../Place/Place';

const Home = () => {
    const places = useLoaderData();
    return (
        <section className='w-10/12 mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='w-5/12'>
                    <h1 className='text-5xl font-medium'>
                        Whereever your go <br />
                        Go with all your <br />
                        heart.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates natus cupiditate aut cum quo iusto minima.
                    </p>
                    <button className='bg-yellow-300 px-6 py-2 rounded-md'>Explore More</button>
                </div>
                <img src={bannerImg} alt="" />
            </div>
            <div className='text-center'>
                <p className='uppercase font-medium'>Featured</p>
                <h3 className='text-3xl font-medium'>Discover More Destination</h3>
                <div className='grid grid-cols-4 gap-5 my-10'>
                    {
                        places.map((place, index) => <Place
                            key={place.id}
                            place={place}
                            index={index}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;