import { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Logo from '../assets/Logo.png'
import ListUl from "./ListUl";
import ListLi from "./ListLi";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router";
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show)
  }

  const CartIcon = useSelector((state) => state.allProduct.cart)
  // console.log(CartIcon);
  const wishlistIcon = useSelector((state) => state.allProduct.wishlist)
  // console.log(wishlistIcon);

  const navActive = ({ isActive }) =>
    isActive
      ? "lg:text-[#DB4444] font-semibold"
      : "lg:text-[#000000] hover:text-[#DB4444]";

  return (
    <>
      <nav className="lg:pt-10 pt-4 pb-4 border-b-1 border-secondary relative z-10">
        <Container>
          <Flex className='flex justify-between items-center'>
            <div className="w-[25%] pl-2.5 lg:pl-0">
              <NavLink to='/'>
                <img src={Logo} alt="" />
              </NavLink>
            </div>

            <div className={`${show ? 'block' : 'hidden'} lg:flex absolute justify-between items-center lg:text-black top-15     lg:static lg:bg-transparent text-white bg-black lg:w-[75%] w-full pl-4 lg:pl-0 py-4 lg:py-0`}>
              <div>
                <ListUl className='flex-wrap lg:flex lg:gap-12 leading-6 lg:leading-0 hover:border-none cursor-pointer z-auto'>
                  <NavLink to='/' end className={navActive}>
                    <ListLi className='customize'> home</ListLi>
                  </NavLink>
                  <NavLink to="/shop" className={navActive}>
                    <ListLi className='customize'>shop</ListLi>
                  </NavLink>
                  <NavLink to="/contact" className={navActive}>
                    <ListLi className="customize">contact</ListLi>
                  </NavLink>
                  <NavLink to="/about" className={navActive}>
                    <ListLi className="customize">about</ListLi>
                  </NavLink>
                  <NavLink to="/signup" className={navActive}>
                    <ListLi className="customize">sign up</ListLi>
                  </NavLink>
                </ListUl>
              </div>

              <div className="flex-wrap lg:flex gap-6">
                <div className="relative">
                  <input
                    type='text'
                    className="w-[243px] bg-[#F5F5F5] text-black mt-3.5 lg:mt-0 text-xs py-2.5 pl-5 pr-3 rounded-full lg:rounded-sm"
                    placeholder="What are you looking for?"
                  />
                  <CiSearch className="absolute lg:top-1.5 lg:right-2.5 top-5 right-36 text-black text-2xl cursor-pointer" />
                </div>
                <div className="flex lg:static lg:top-0 absolute top-39 right-2.5 items-center text-2xl lg:gap-4 gap-1.5 cursor-pointer">
                  <NavLink to="/wishlist">
                    <div className="relative ">
                      <CiHeart />
                      <h2 className="absolute w-5 h-5 -top-3 left-3 rounded-full bg-primary text-white flex justify-center items-center text-xs">{wishlistIcon.length}</h2>
                    </div>
                  </NavLink>

                  <NavLink to='/attocart'>
                    <div className="relative ">
                      <IoCartOutline />
                      <h2 className="absolute w-5 h-5 -top-3 left-3 rounded-full bg-primary text-white flex justify-center items-center text-xs">{CartIcon.length}</h2>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

          </Flex>
          <AiOutlineBars onClick={handleClick} className="lg:hidden block text-3xl pl-2.5 text-center right-2.5 top-2.5 absolute cursor-pointer" />
        </Container>
      </nav>
    </>
  )
}

export default Navbar;
