import { useEffect, useState } from 'react';
import { countDownDateAndTime } from 'countdown-date-time';
import Flex from './Flex';


const JblCounter = ({ className }) => {
  const conduct_date = '2025-09-30 23:54:00';
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
        <Flex className={`${className} font-poppins font-medium text-center gap-x-6 lg:gap-x-5 top-[-120px] left-40 lg:left-80 lg:top-[-65px]`}>
          <div className='bg-white lg:h-15.5 lg:w-15.5 h-11 w-11 rounded-full'>
            <div className='lg:px-1.75 lg:py-3.5'>
              <h2>{count.days}</h2>
              <h2 className='text-[11px]'>Day's</h2>
            </div>
          </div>

          <div className='bg-white lg:h-15.5 lg:w-15.5 h-11 w-11 rounded-full'>
            <div className='lg:plg:x-1.75 lg:py-3.5'>
              <h2>{count.hours}</h2>
              <h2 className='text-[11px]'>'Hours</h2>
            </div>
          </div>

          <div className='bg-white lg:h-15.5 lg:w-15.5 h-11 w-11 rounded-full'>
            <div className='lg:px-1.75 lg:py-3.5'>
              <h2>{count.minutes}</h2>
              <h2 className='text-[11px]'>Minutes</h2>
            </div>
          </div>

          <div className='bg-white lg:h-15.5 lg:w-15.5 h-11 w-11 rounded-full'>
            <div className='lg:px-1.75 lg:py-3.5'>
              <h2>{count.seconds}</h2>
              <h2 className='text-[11px]'>Seconds</h2>
            </div>
          </div>
        </Flex>
      </div>
    </>
  );
}

export default JblCounter;
