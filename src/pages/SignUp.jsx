import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import SignupImg from '../assets/signupimg.png'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

const SignUp = () => {
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
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none' />
            </div>

            <div className='mt-10  '>
              <input
                type="email"
                placeholder='Email or Phone Number'
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none' />
            </div>

            <div className='mt-10 mb-10 '>
              <input
                type="password"
                placeholder='Password'
                className='border-b-2 border-secondary w-92.5 h-8 py-2 focus:outline-none' />
            </div>

            <div>
              <NavLink className='text-white px-33 py-4 bg-primary hover:bg-[#d60303] duration-300 rounded-sm'>
                Create Account
              </NavLink>
            </div>

            <div className='mt-8'>
              <NavLink className='text-black flex items-center gap-2 border-1 border-secondary hover:text-white hover:bg-black duration-300 px-22 py-4 rounded-sm'>
                <span className='text-2xl'><FcGoogle /></span>
                Sign up with Google
              </NavLink>
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