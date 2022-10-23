import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Hotels = () => {
    const hotels = useLoaderData();
    return (
        <section className='py-10 w-10/12 mx-auto grid grid-cols-2'>
            <div className='grid gap-10'>
                {
                    hotels.map(hotel => (
                        <div key={hotel.id} className="flex items-center gap-5">
                            <img className='w-72 rounded-xl' src={hotel.cover} alt="" />
                            <div>
                                <h3 className='text-xl font-medium mb-2'>{hotel.title}</h3>
                                <p className='font-thin mb-2'>{hotel.desc}</p>
                                <div className='flex justify-between'>
                                    <span className='flex gap-1 items-center'><FaStar className='text-yellow-300' /> {hotel.ratings} ({hotel.totalRating})</span>
                                    <span><span className='text-xl'>${hotel.price}</span>/night</span>
                                    <span>Total: ${hotel.tax + hotel.price}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Hotels;