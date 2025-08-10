import React from 'react';
import Container from './Container';
import Flex from './Flex';
import { VscSend } from "react-icons/vsc";
import ListUl from './ListUl';
import ListLi from './ListLi';
import CodeImg from '../assets/code.png';
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";



const Footer = () => {
    return (
        <>
            <footer className='bg-black lg:mt-25 mt-15'>
                <Container>
                    <Flex className='text-white grid grid-cols-1 lg:flex lg:py-20 lg:gap-21.75 py-10 gap-8'>

                        <div className='lg:mx-0 mx-auto lg:text-start text-center'>
                            <h2 className='text-2xl font-bold font-inter'>Exclusive</h2>
                            <h2 className='text-xl font-medium font-poppins lg:py-6 py-2'>Subscribe</h2>
                            <p className='font-poppins lg:pb-4 pb-1'>Get 10% off your first order</p>
                            <input
                                type='text'
                                className="lg:w-40 w-70 bg-transparent text-[#FAFAFA] mt-3.5 lg:mt-0 text-xs py-2.5 pl-5 pr-3 border-1 rounded-full lg:rounded-sm"
                                placeholder="Enter your email"
                            />
                            <div className='relative'>
                                <VscSend className='absolute lg:right-14 right-6 -top-6.5 text-white cursor-pointer' />
                            </div>
                        </div>

                        <div className='font-poppins w-43.75 lg:mx-0 mx-auto lg:text-start text-center'>
                            <h2 className='text-xl font-medium'>Support</h2>
                            <p className='lg:pt-6 lg:pb-4 pt-2 pb-1'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            <h2 className='lg:pb-4 pb-1'>exclusive@gamil.com</h2>
                            <h2>+88015-88888-9999</h2>
                        </div>


                        <ListUl className="lg:mx-0 mx-auto lg:text-start text-center">
                            <ListLi className='text-xl font-medium font-poppins'>Account</ListLi>
                            <ListLi className='lg:pt-6 lg:pb-4 pt-3 pb-1'>My Account</ListLi>
                            <ListLi>Login / Register</ListLi>
                            <ListLi className='lg:pt-6 lg:pb-4 pt-3 pb-1'>Cart</ListLi>
                            <ListLi className='lg:pb-4 pb-1'>Wishlist</ListLi>
                            <ListLi>Shop</ListLi>
                        </ListUl>

                        <ListUl className="lg:mx-0 mx-auto lg:text-start text-center">
                            <ListLi className='text-xl font-medium font-poppins'>Quick Link</ListLi>
                            <ListLi className='lg:pt-6 lg:pb-4 pt-3 pb-1'>Privacy Policy</ListLi>
                            <ListLi>Terms Of Use</ListLi>
                            <ListLi className='plg:pt-6 lg:pb-4 pt-3 pb-1'>FAQ</ListLi>
                            <ListLi>Contact</ListLi>
                        </ListUl>

                        <div className='lg:mx-0 mx-auto lg:text-start text-center'>
                            <h2 className='text-xl font-medium font-poppins'>Download App</h2>
                            <p className='text-xs font-poppins font-medium lg:pt-6 lg:pb-4 pt-3 pb-1'>Save $3 with App New User Only</p>
                            <img src={CodeImg} alt="" />
                            <div className='flex justify-around gap-2 pt-6 text-2xl'>
                                <FaFacebookF />
                                <CiTwitter />
                                <FaInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </Flex>
                </Container>
                    <div className='border-[#353434b3] border-b-2 w-full pb-4'></div>
                <div className='flex justify-center items-center text-[#353434b3] gap-1'>
                    <FaRegCopyright />
                    <h2 className='text-[#353434b3] text-center py-4'> Copyright Rimel 2022. All right reserved</h2>
                </div>
            </footer>
        </>
    )
}

export default Footer;
