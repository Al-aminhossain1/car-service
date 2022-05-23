import React from 'react';
import google from '../../../images/social login/google.png'
import facebook from '../../../images/social login/facebook.jpg'
import github from '../../../images/social login/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const from = location.state?.from?.pathname || "/";
    let errorElement;
    let loadingElement;
    if (googleLoading || githubLoading) {
        return <Loading></Loading>

    }
    if (googleError || githubError) {
        errorElement = <div>
            <h5 className='text-danger'>Error:{googleError?.message}{githubError?.message}</h5>
        </div>
    }
    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', }} className='bg-primary w-50'></div>
                <div><p className='mt-2 px-2'>or</p></div>
                <div style={{ height: '1px', }} className='bg-primary w-50'></div>
            </div>
            {loadingElement}
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    Google sign In
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-success w-50 d-block mx-auto my-3'>
                    <img src={github} alt="" />
                    Github sign In
                </button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img className='' style={{ width: '30px' }} src={facebook} alt="" />
                    Facebook sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;