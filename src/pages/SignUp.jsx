import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import SignupImg from '../assets/signupimg.png'
import { FcGoogle } from "react-icons/fc";
import { Navigate, NavLink, useNavigate } from "react-router";
import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";



const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let Navigate = useNavigate();

  const auth = getAuth();

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(handleClick);

    if (name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              updateProfile(auth.currentUser, {
                displayName: name,
                // photoURL: "https://example.com/jane-q-user/profile.jpg"
              })
                .then(() => {
                  const user = userCredential.user;
                  console.log(user);
                  Navigate('/Login');
                })
                .catch((error) => {
                  // console.log(error);
                });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode, errorMessage);

        });
    }
  }

  return (
    <>
      <Container>
        <div className='mt-5 lg:mt-20'>
          <BreadCrumb />
        </div>
        <div className='mt-5 lg:mt-15 flex'>
          <div className='absolute left-0'>
            <img src={SignupImg} alt="#" className='h-149 lg:h-185.25 opacity-15 lg:opacity-100 lg:flex' />
          </div>
          <div className='pl-5 lg:pl-187.25 lg:mt-31.25 z-1'>

            <h4 className='text-[36px] font-medium font-inter'>Create an account</h4>
            <p className='font-poppins mt-6'>Enter your details below</p>

            <div className='mt-12 '>
              <input
                type="text"
                placeholder='Name'
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none'
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='mt-10  '>
              <input
                type="email"
                placeholder='Email or Phone Number'
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mt-10 mb-10 '>
              <input
                type="password"
                placeholder='Password'
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button onClick={handleClick} className='text-white px-33 py-4 bg-primary hover:bg-[#d60303] duration-300 rounded-sm cursor-pointer'>
                Create Account
              </button>
            </div>

            <div className='mt-8'>
              <button className='text-black flex items-center gap-2 border-1 border-secondary hover:text-white hover:bg-black duration-300 px-22 py-4 rounded-sm cursor-pointer'>
                <span className='text-2xl'><FcGoogle /></span>
                Sign up with Google
              </button>
            </div>

            <div className='flex gap-2 items-center mt-8 text-center justify-center'>
              <p>Already have account?</p>
              <NavLink to='/Login' className='hover:border-b-1 hover:border-black font-medium'>Log in</NavLink>
            </div>

          </div>
        </div>
      </Container>
    </>
  )
}

export default SignUp;