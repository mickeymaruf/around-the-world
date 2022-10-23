import React from 'react';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { useAuth } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const SocialAuth = ({ setError }) => {
    const navigate = useNavigate();
    const { providerLogin } = useAuth();
    const loginWithProvider = (provider) => {
        setError(null);
        providerLogin(provider)
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const loginWithGoogle = () => {
        loginWithProvider(googleProvider);
    }
    const loginWithFacebook = () => {
        loginWithProvider(facebookProvider);
    }
    return (
        <div className='mt-5'>
            <button onClick={loginWithFacebook} className='border rounded-full w-full flex items-center text-center'>
                <img className='w-12' src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" />
                <span className='font-medium'>Continue with Login</span>
            </button>
            <button onClick={loginWithGoogle} className='border rounded-full w-full flex items-center text-center mt-3'>
                <img className='w-11' src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />
                <span className='font-medium'>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialAuth;