import { useState } from "react";
import Container from './Container';
import ListUl from './ListUl';
import ListLi from './ListLi';
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from './Image';
import Banner from '../assets/Banner.jpg';
import { BiCategory } from "react-icons/bi";



const BannerImg = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "13px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "15px",
          height: "15px",

        }}
      >
        {/* {i+1 } */}
      </div>
    )
  };

  return (
    <Container>
      <div className="lg:flex">
        {/* category part start */}
        <div className="flex lg:hidden items-center gap-2 text-2xl font-bold pl-2.5 mt-5">
          <BiCategory onClick={handleClick} className="lg:hidden cursor-pointer" />
          <h2>Category</h2>
        </div>

        <div className={`${show ? 'block' : 'hidden'} lg:flex w-[217px] sm:w-1/4 lg:border-r border-solid border-secondary`}>
          <ListUl className="lg:mt-6 mt-3 px-4 sm:px-0 sm:pr-4 lg:leading-9.5 font-poppins w-full">
            <ListLi className="flex items-center justify-between">Woman’s Fashion <IoIosArrowForward /></ListLi>
            <ListLi className="flex items-center justify-between">Men’s Fashion <IoIosArrowForward /></ListLi>
            <ListLi>Electronics</ListLi>
            <ListLi>Home & Lifestyle</ListLi>
            <ListLi>Medicine</ListLi>
            <ListLi>Sports & Outdoor</ListLi>
            <ListLi>Baby’s & Toys</ListLi>
            <ListLi>Groceries &</ListLi>
            <ListLi>Health & Beauty</ListLi>
          </ListUl>
        </div>
        {/* category part start */}

        {/* Banner Slide start */}
        <div className='w-full lg:w-3/4 mt-6 lg:mt-10 lg:pl-10'>
          <Slider {...settings}>
            <div>
              <Image src={Banner} />
            </div>
            <div>
              <Image src={Banner} />
            </div>
            <div>
              <Image src={Banner} />
            </div>
            <div>
              <Image src={Banner} />
            </div>
            <div>
              <Image src={Banner} />
            </div>
          </Slider>
        </div>
        {/* Banner Slide end */}
      </div>
    </Container>
  );
};

export default BannerImg;
