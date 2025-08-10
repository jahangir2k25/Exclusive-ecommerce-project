import Container from './Container';
import Counter from './Counter';
import SecHead from './SecHead';
import Card from './Card';
import Gamepad from '../assets/gamepad.png';
import Keyboard from '../assets/keyboard.png';
import Monitor from '../assets/monitor.png';
import Chair from '../assets/chair.png';
import Button from './Button';
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


const FlashSales = () => {
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
            <Container className='lg:pt-38.5 pt-10'>
                <div>
                    <SecHead
                        title="Today's"
                        heading="Flash Sales"
                    />
                    <Counter />
                </div>

                <Slider {...settings} className='mt-10'>
                    <div>
                        <Card
                            img={Gamepad}
                            heading='HAVIT HV-G92 Gamepad'
                            price='$120'
                            pastprice='$160'
                            rating='(88)'
                            discount='-40%'
                        />
                    </div>
                    <div>
                        <Card
                            img={Keyboard}
                            heading='AK-900 Wired Keyboard'
                            price='$960'
                            pastprice='$1160'
                            rating='(75)'
                            discount='-35%'
                        />
                    </div>
                    <div>
                        <Card
                            img={Monitor}
                            heading='IPS LCD Gaming Monitor'
                            price='$370'
                            pastprice='$400'
                            rating='(99)'
                            discount='-30%'
                        />
                    </div>
                    <div>
                        <Card
                            img={Chair}
                            heading='S-Series Comfort Chair '
                            price='$375'
                            pastprice='$400'
                            rating='(99)'
                            discount='-25%'
                        />
                    </div>
                </Slider>
                <div className='text-center pt-13.25'>
                    <Button className='lg:h-14 lg:w-58.5 h-8 w-40 bg-primary hover:bg-[#db4444d2] rounded-sm'> View All Products </Button>
                </div>
                <div className='border-secondary border-b-2 w-full pt-15'></div>
            </Container>
        </>
    )
}

export default FlashSales;
