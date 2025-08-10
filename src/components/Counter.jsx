import { useEffect, useState } from 'react';
import { countDownDateAndTime } from 'countdown-date-time';
import Flex from './Flex';
import Image from './Image';
import Semiclone from '../assets/Semiclone.png'


const Counter = ({ children, className }) => {
    const conduct_date = '2025-08-31 16:54:00';
    const [count, setCount] = useState({});

    useEffect(() => {
        const updateCountdown = () => {
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown);
        };
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='relative'>
                <Flex className={`${className} justify-center items-center text-center font-poppins font-medium absolute lg:text-2xl text-[8px] gap-x-3 lg:gap-x-5 top-[-120px] left-40 lg:left-80 lg:top-[-65px]`}>
                    <div>
                        <h2>Day's</h2>
                        <h3>{count.days}</h3>
                    </div>
                    <Image src={Semiclone} />
                    <div>
                        <h2>Hours</h2>
                        <h3>{count.hours}</h3>
                    </div>
                    <Image src={Semiclone} />
                    <div>
                        <h2>Minutes</h2>
                        <h3>{count.minutes}</h3>
                    </div>
                    <Image src={Semiclone} />
                    <div>
                        <h2>Seconds</h2>
                        <h3>{count.seconds}</h3>
                    </div>
                </Flex>
                {children}
            </div>
        </>
    );
}

export default Counter;
