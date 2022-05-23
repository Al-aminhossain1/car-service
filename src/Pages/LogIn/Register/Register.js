import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let errorElement;
    let loadingElement;
    if (error) {
        errorElement = <h5 className='text-center text-danger'>Error:{error?.message}</h5>

    }
    if (loading || updating) {
        return <Loading></Loading>

    }
    if (user) {
        console.log(user)
    }

    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/')
    }
    return (
        <div className='register-form'>
            <h1 className='text-center text-primary'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter Your Name' />
                <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input type="password" name="password" id="" placeholder='Enter Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'text-danger' : 'text-primary'} htmlFor="terms">Accept Car Service Terms and Condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Car Service Terms and Condition</label>
                <input className='btn btn-primary d-block w-50 mx-auto mt-2'
                    disabled={!agree}
                    type="submit" value="Register" />
                {errorElement}
                {loadingElement}
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Log in</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;