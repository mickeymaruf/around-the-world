import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookPlace = () => {
    const place = useLoaderData();

    const getDate = () => {
        const dateFull = new Date().toDateString().split(" ");
        const year = dateFull[dateFull.length - 1];
        let month = new Date().getMonth() + "";
        if (month.length === 1) {
            month = "0" + month;
        }
        const date = dateFull[dateFull.length - 2];
        return `${year}-${month}-${date}`;
    }

    return (
        <div className='w-10/12 mx-auto pt-5 flex justify-between my-10 gap-10'>
            <div className='flex-1 h-[500px] p-8 rounded-xl text-white' style={
                {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.155)), url(${place.imageURL})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }
            }>
                <h1 className='text-5xl font-light mb-3'>{place.name}</h1>
                <p className='font-thin'>{place.desc}</p>
            </div>
            <form className='flex-1 self-start p-10 bg-indigo-300 rounded-xl'>
                <div className='bg-grey-400 mb-4'>
                    <label className='block mb-2 text-black font-medium'>Origin</label>
                    <input type="text" readOnly className='border w-full p-3 font-bold rounded-lg bg-gray-100 outline-0' defaultValue={place.destination} />
                </div>
                <div className='bg-grey-400 mb-4'>
                    <label className='block mb-2 text-black font-medium'>Destination</label>
                    <input type="text" readOnly className='border w-full p-3 font-bold rounded-lg bg-gray-100 outline-0' defaultValue={place.name} />
                </div>
                <div className='bg-grey-400 mb-4 flex gap-5'>
                    <div className='w-full'>
                        <label className='block mb-2 text-black font-medium'>From</label>
                        <input type="date" defaultValue={getDate()} className='border w-full p-3 font-bold rounded-lg bg-gray-100 outline-0' />
                    </div>
                    <div className='w-full'>
                        <label className='block mb-2 text-black font-medium'>To</label>
                        <input type="date" defaultValue={getDate()} className='border w-full p-3 font-bold rounded-lg bg-gray-100 outline-0' />
                    </div>
                </div>
                <Link to={`/hotels/${place.id}`}><button className='w-full bg-yellow-300 px-6 py-3 rounded-md font-medium'>Start Booking</button></Link>
            </form>
        </div>
    );
};

export default BookPlace;