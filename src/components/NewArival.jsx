import React from 'react'
import Container from './Container';
import SecHead from './SecHead';
import PlaystationImg from '../assets/playstation.png';
import WomenImg from '../assets/women.png';
import SpeekersImg from '../assets/speeker.png';
import PerfumeImg from '../assets/perfume.png';

const NewArival = () => {
    return (
        <>
            <Container className='lg:mt-25'>
                <SecHead
                    title="Featured"
                    heading="New Arrival"
                />
                <div className='lg:flex justify-between lg:gap-7.5 lg:mt-15 mt-5 mx-auto'>
                    <div className='lg:flex justify-between items-center bg-black lg:w-142.5 relative'>
                        <img src={PlaystationImg} alt="" />
                        <div className='text-white absolute left-8 bottom-8 w-60.5'>
                            <h2 className='text-2xl font-inter font-semibold'>PlayStation 5</h2>
                            <p className='py-4 text-sm text-[#FAFAFA]'>Black and White version of the PS5 coming out on sale.</p>
                            <button className='border-b border-secondary font-poppins cursor-pointer '>Shop Now</button>
                        </div>
                    </div>
                    <div>
                        <div className='w-full relative lg:mt-0 mt-3'>
                            <img className='mx-auto lg:w-full' src={WomenImg} alt="" />
                            <div className='text-white absolute left-8 bottom-8 w-60.5'>
                                <h2 className='text-2xl font-inter font-semibold'>PlayStation 5</h2>
                                <p className='py-4 text-sm text-[#FAFAFA]'>Black and White version of the PS5 coming out on sale.</p>
                                <button className='border-b border-secondary font-poppins cursor-pointer '>Shop Now</button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 lg:gap-7.5 gap-3 lg:mt-7.5 mt-3 text-center'>
                            <img className='mx-auto' src={SpeekersImg} alt="" />
                            <img className='mx-auto' src={PerfumeImg} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default NewArival;
