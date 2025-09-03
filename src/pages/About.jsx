import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import TwoGirls from '../assets/twogirls.png';
import Tom from '../assets/tom.png';
import Emma from '../assets/emma.png';
import WillSmith from '../assets/willsmith.png';
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";
import Services from '../components/Services';
import ThirdHead from '../components/ThirdHead';
import { AiOutlineShop } from "react-icons/ai";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaSackDollar } from "react-icons/fa6";


const About = () => {
  return (
    <>
      <Container>
        <div className='mt-5 lg:mt-20 mb-5 lg:mb-10.5'>
          <BreadCrumb />
        </div>
        <div className='lg:flex flex-col gap-12 pb-35'>
          <div className='mt-8 font-poppins w-100 pl-5 lg:pl-0 pr-5 lg:pr-0 lg:w-131.25'>
            <h2 className='font-inter font-bold text-[54px]'>Our Story</h2>
            <p className='my-8'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3  millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categoriesranging from consumer.</p>
          </div>
          <div className='absolute mt-5 lg:mt-0 right-0'>
            <img src={TwoGirls} alt="" className='w-162.5 h-153 pb-35' />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-3.5 justify-between items-center mt-100 lg:mt-35 '>
          <ThirdHead
            items={
              <div className='px-3 py-3 bg-black rounded-full flex justify-center items-center border-10 border-gray-300'>
                <AiOutlineShop className='text-white text-3xl' />
              </div>}
            count='10.5k'
            heading='Sallers active our site'
            className='w-67.5 h-57.5 hover:border-primary'
          />
          <ThirdHead
            items={
              <div className='px-3 py-3 bg-black rounded-full flex justify-center items-center border-10 border-gray-300'>
                <HiMiniCurrencyDollar className='text-white text-3xl' />
              </div>}
            count='33k'
            heading='Mopnthly Produduct Sale'
            className='w-67.5 h-57.5 hover:border-primary'
          />
          <ThirdHead
            items={
              <div className='px-3 py-3 bg-black rounded-full flex justify-center items-center border-10 border-gray-300'>
                <HiMiniShoppingBag className='text-white text-3xl' />
              </div>}
            count='45.5k'
            heading='Customer active in our site'
            className='w-67.5 h-57.5 hover:border-primary'
          />
          <ThirdHead
            items={
              <div className='px-3 py-3 bg-black rounded-full flex justify-center items-center border-10 border-gray-300 '>
                <FaSackDollar className='text-white text-3xl' />
              </div>}
            count='25k'
            heading='Anual gross sale in our site'
            className='w-67.5 h-57.5 hover:border-primary'
          />


        </div>

        <div className='mt-15 flex flex-col lg:flex-row gap-3.5 justify-between items-center'>
          <div>
            <div>
              <img src={Tom} alt="" />
              <h3 className='font-bold text-[32px] mt-8'>Tom Cruise</h3>
              <p className='mt-2'>Founder & Chairman</p>
            </div>
            <div className='flex gap-3 mt-2'>
              <CiTwitter />
              <CiInstagram />
              <TiSocialLinkedin />
            </div>
          </div>

          <div>
            <div>
              <img src={Emma} alt="" />
              <h3 className='font-bold text-[32px] mt-8'>Emma Watson</h3>
              <p className='mt-2'>Managing Director</p>
            </div>
            <div className='flex gap-3 mt-2'>
              <CiTwitter />
              <CiInstagram />
              <TiSocialLinkedin />
            </div>
          </div>

          <div>
            <div>
              <img src={WillSmith} alt="" />
              <h3 className='font-bold text-[32px] mt-8'>Will Smith</h3>
              <p className='mt-2'>Product Designer</p>
            </div>
            <div className='flex gap-3 mt-2'>
              <CiTwitter />
              <CiInstagram />
              <TiSocialLinkedin />
            </div>
          </div>
        </div>

        <div>
          <Services />
        </div>

      </Container>
    </>
  )
}

export default About;
