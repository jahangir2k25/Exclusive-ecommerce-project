import React from 'react'
import Container from './Container';
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiSolidCheckShield } from "react-icons/bi";


const Services = () => {
    return (
        <>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3.5 mt-25'>
                    <div className='flex flex-col text-center items-center'>
                        <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-10 border-gray-300">
                            <TbTruckDelivery className="text-white text-2xl" />
                        </div>
                        <div className='font-poppins pt-6'>
                            <h5 className='text-xl font-semibold'>FREE AND FAST DELIVERY</h5>
                            <h6 className='text-sm'>Free delivery for all orders over $140</h6>
                        </div>
                    </div>
                    <div className='flex flex-col text-center items-center'>
                        <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-10 border-gray-300">
                            <TfiHeadphoneAlt className="text-white text-2xl" />
                        </div>
                        <div className='font-poppins pt-6'>
                            <h5 className='text-xl font-semibold'>24/7 CUSTOMER SERVICE</h5>
                            <h6 className='text-sm'>Friendly 24/7 customer support</h6>
                        </div>
                    </div>
                    <div className='flex flex-col text-center items-center'>
                        <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-10 border-gray-300">
                            <BiSolidCheckShield className="text-white text-2xl" />
                        </div>
                        <div className='font-poppins pt-6'>
                            <h5 className='text-xl font-semibold'>MONEY BACK GUARANTEE</h5>
                            <h6 className='text-sm'>We reurn money within 30 days</h6>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </>
    )
}

export default Services;

