import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import GamepadImg from '../assets/gamepad.png'

const Product = () => {
    return (
        <>
            <Container>
                <Flex className='justify-between gap-5'>
                    <div className='w-[20%]'>
                        <div className='bg-secondary flex justify-center items-center '><img src={GamepadImg} alt="" /></div>
                        <div className='bg-secondary flex justify-center items-center my-5'><img src={GamepadImg} alt="" /></div>
                        <div className='bg-secondary flex justify-center items-center'><img src={GamepadImg} alt="" /></div>
                        <div className='bg-secondary flex justify-center items-center mt-5'><img src={GamepadImg} alt="" /></div>
                    </div>

                    <div className='w-[45%]'>
                        <div className='bg-secondary h-150 w-125 flex justify-center items-center'>
                            <img src={GamepadImg} alt="" />
                        </div>
                    </div>

                    <div className='w-[35%]'>
                            <h2>Havic HV G-92 Gamepad</h2>
                            <h3>$192.00</h3>
                            <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default Product;
