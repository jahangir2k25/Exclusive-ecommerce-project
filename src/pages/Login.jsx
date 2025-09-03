import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import SignupImg from '../assets/signupimg.png'
import { NavLink } from "react-router";

const Login = () => {
    return (
        <>
            <Container>
                <div className='mt-5 lg:mt-20'>
                    <BreadCrumb />
                </div>
                <div className='mt-5 lg:mt-15 lg:pb-35 flex'>
                    <div className='absolute left-0'>
                        <img src={SignupImg} alt="#" className='h-100 lg:h-175 opacity-15 lg:opacity-100 lg:flex' />
                    </div>
                    <div className='pl-5 lg:pl-187.25 lg:mt-31.25 z-1'>

                        <h4 className='text-[36px] font-medium font-inter'>Create an account</h4>
                        <p className='font-poppins mt-6'>Enter your details below</p>

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

                        <div className='flex gap-22 items-center'>
                            <NavLink className='text-white px-12  py-4 bg-primary hover:bg-[#d60303] rounded-sm'>
                                Log in
                            </NavLink>
                            <NavLink className='text-primary hover:border-b-1'>Forget Password?</NavLink>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login;