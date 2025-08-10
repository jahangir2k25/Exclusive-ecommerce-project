import React from 'react'
import Container from './Container';
import SecHead from './SecHead';
import Card from './Card';
import DogFoodimg from '../assets/Dogfood.png'
import Dslrimg from '../assets/Dslr.png'
import Laptopimg from '../assets/Laptop.png'
import Facewashimg from '../assets/facewash.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Button from './Button';

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

const OurProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
            <Container className='lg:mt-17.75 mt-10'>
                <SecHead
                    title='Our Products'
                    heading='Explore Our Products'
                />
                <Slider {...settings} className='lg:mt-15 mt-5 gap-2.5'>
                    <Card
                        img={DogFoodimg}
                        heading='S-Series Comfort Chair '
                        price='$375'
                        pastprice='$400'
                        rating='(99)'
                        discount='-10%'
                    />
                    <Card
                        img={Dslrimg}
                        heading='S-Series Comfort Chair '
                        price='$375'
                        pastprice='$400'
                        rating='(99)'
                        discount='-15%'
                    />
                    <Card
                        img={Laptopimg}
                        heading='S-Series Comfort Chair '
                        price='$375'
                        pastprice='$400'
                        rating='(99)'
                        discount='-40%'
                    />
                    <Card
                        img={Facewashimg}
                        heading='S-Series Comfort Chair '
                        price='$375'
                        pastprice='$400'
                        rating='(99)'
                        discount='-25%'
                    />
                    <Card
                        img={DogFoodimg}
                        heading='S-Series Comfort Chair '
                        price='$375'
                        pastprice='$400'
                        rating='(99)'
                        discount='-10%'
                    />
                    <Card
                        img={Dslrimg}
                        heading='S-Series Comfort Chair '
                        price='$375'
                        pastprice='$400'
                        rating='(99)'
                        discount='-15%'
                    />
                    <Card
                        img={Laptopimg}
                        heading='S-Series Comfort Chair '
                        price='$375'
                        pastprice='$400'
                        rating='(99)'
                        discount='-40%'
                    />
                    <Card
                        img={Facewashimg}
                        heading='S-Series Comfort Chair '
                        price='$375'
                        pastprice='$400'
                        rating='(99)'
                        discount='-25%'
                    />
                </Slider>
                <div className='text-center pt-13.25'>
                    <Button className='lg:h-14 lg:w-58.5 h-8 w-40 bg-primary hover:bg-[#db4444d2] rounded-sm'> View All Products </Button>
                </div>

            </Container>
        </>
    )
}

export default OurProducts;
