import React from 'react';
import bannerImg from '../../assets/images/banner-removebg-preview.png';
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
    const places = [
        { id: 'places-1', name: "istanbul", imageURL: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWwlMjBjaXR5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 'places-2', name: "istanbul", imageURL: "https://images.unsplash.com/photo-1614270857866-191c0bc3cb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9zbG98ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 'places-3', name: "istanbul", imageURL: "https://images.unsplash.com/photo-1629140747998-f1522a4adf15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGlzdGFuYnVsJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
        { id: 'places-4', name: "istanbul", imageURL: "https://images.unsplash.com/photo-1629140747998-f1522a4adf15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGlzdGFuYnVsJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    ]
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
                <div className='grid grid-cols-4 gap-5 mt-10'>
                    {
                        places.map((place, index) => <div key={place.id} className={index % 2 !== 0 ? "mt-16 relative" : "relative"}>
                            <img className='rounded-xl' src={place.imageURL} alt="" />
                            <div className='absolute top-0 right-0 bg-white px-4 py-2 m-3 rounded-md font-medium flex items-center gap-1'><FaMapMarkerAlt /> {place.name}</div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;