import Container from './Container';
import JblCounter from './JblCounter';

const Jbl = () => {
    return (
        <>
            <Container>
                <div className='relative lg:mt-35 mt-15 bg-[url(./assets/jbl.png)] bg-center bg-no-repeat bg-cover lg:h-125 h-60 w-full'>
                    {/* <div className=''>
                        <img src={JblImg} alt="#" />
                    </div> */}
                    <div className='absolute lg:w-110.75 lg:left-14 lg:top-17.25 left-8 top-7.25'>
                        <h2 className='text-[12px] lg:text-[16px] font-poppins font-semibold text-[#00FF66] '>Categories</h2>
                        <h2 className='font-inter font-semibold text-white lg:text-[48px] lg:py-8 py-4'>Enhance Your Music Experience</h2>
                        <JblCounter className="text-black pb-8"/>
                        <button className='lg:px-12 lg:py-4 px-3 py-2 bg-[#00FF66] text-white hover:text-[#00ff66] lg:text-2xl text-xs hover:bg-transparent border-1 border-[#00FF66] duration-300 rounded-sm'>Buy Now!</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Jbl;
