import SecHead from './SecHead';
import Container from './Container';
import ThirdHead from './ThirdHead';
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute -top-20 right-0 text-2xl bg-[#F5F5F5] p-2.75 rounded-full cursor-pointer'
            onClick={onClick}
        >
            <FaArrowLeftLong />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute -top-20 right-15 text-2xl bg-[#F5F5F5] p-2.75 rounded-full cursor-pointer'
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
}

const Category = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <>
            <Container>
                <div className='lg:pt-20 pt-10 lg:pb-15 pb-7'>
                    <SecHead
                        title="Categories"
                        heading="Browse By Category"
                    />
                </div>

                <Slider {...settings}>
                    <ThirdHead
                        items={<IoIosPhonePortrait />}
                        heading='Phones'
                    />
                    <ThirdHead
                        items={<HiOutlineComputerDesktop />}
                        heading='Computers'
                    />
                    <ThirdHead
                        items={<BsSmartwatch />}
                        heading='Smart Watch'
                    />
                    <ThirdHead
                        items={<CiCamera />}
                        heading='Camera'
                    />
                    <ThirdHead
                        items={<PiHeadphones />}
                        heading='Headphones'
                    />
                    <ThirdHead
                        items={<LuGamepad />}
                        heading='Gaming'
                    />
                </Slider>
            </Container>
        </>
    )
}

export default Category;

