import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Place = ({ place, index }) => {
    return (
        <div key={place.id} className={index % 2 !== 0 ? "mt-16 relative" : "relative"}>
            <Link to={`/place/${place.id}`}><img className='rounded-xl' src={place.imageURL} alt="" /></Link>
            <div className='absolute top-0 right-0 bg-white px-4 py-2 m-3 rounded-md font-medium flex items-center gap-1'>
                <FaMapMarkerAlt />
                {place.name}
            </div>
        </div>
    );
};

export default Place;