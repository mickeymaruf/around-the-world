import React from 'react';

const SocialAuth = () => {
    return (
        <div className='mt-5'>
            <button className='border rounded-full w-full flex items-center text-center'>
                    <img className='w-12' src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" />
                <span className='font-medium'>Continue with Login</span>
            </button>
            <button className='border rounded-full w-full flex items-center text-center mt-3'>
                    <img className='w-11' src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />
                <span className='font-medium'>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialAuth;