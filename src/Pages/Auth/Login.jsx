import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import SocialAuth from './SocialAuth';
import toast from 'react-hot-toast';

const Login = () => {
    const { loginUser } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        setError(null);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!email || !password) {
            setError("Field can't be empty!")
            return;
        }
        loginUser(email, password)
            .then(result => {
                if (!result.user.emailVerified) {
                    toast.error("Please verify your email first!");
                } else {
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='border w-6/12 my-16 mx-auto p-10'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-2xl font-bold'>Login</h3>
                    <div className='mt-6'>
                        <input name="email" className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="text" placeholder='Username or Email' />
                    </div>
                    <div className='mt-6'>
                        <input name="password" className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="password" placeholder='Password' />
                    </div>
                    <div className='mt-6'>
                        <button className='bg-yellow-300 px-6 py-2 rounded-md w-full mb-2'>Login</button>
                        <p>Don't have an account? <Link className='text-blue-700 underline' to="/signup">Create a new one</Link></p>
                    </div>
                </form>
                <SocialAuth setError={setError} />
                {
                    error && <div className='text-red-500 mt-5'>{error}</div>
                }
            </div>
        </div>
    );
};

export default Login;