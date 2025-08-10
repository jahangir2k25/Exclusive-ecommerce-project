import Container from './Container';
import Flex from './Flex';
import { IoIosArrowDown } from "react-icons/io";
import ListUi from './ListUl'
import ListLi from './ListLi'
import { useState } from 'react';

const Header = () => {

    const [show, setShow] = useState(false);

    function handleClcik() {
        setShow(!show);

    }
    return (
        <>
            <header className='bg-black py-3 px-2 lg:px-0'>
                <Container>
                    <Flex className='justify-between items-center'>
                        <div className='text-white lg:text-sm text-[10px] text-center w-full lg:w-[90%] mx-auto'>
                            <h5 className='font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className='underline font-bold' >Shop Now</a> </h5>
                        </div>
                        <div className='text-white flex items-center text-sm relative'>
                            <button className='flex cursor-pointer' onClick={handleClcik}>English <IoIosArrowDown className='text-2xl' /></button>
                            {
                                show ?
                                    <ListUi className='absolute top-9 right-0 px-5 z-20 bg-black text-white leading-9.25'>
                                        <ListLi className='cursor-pointer'> English</ListLi>
                                        <ListLi className='cursor-pointer'> Bangla</ListLi>
                                    </ListUi> : null
                            }
                        </div>
                    </Flex>
                </Container>
            </header>
        </>
    )
}

export default Header;
