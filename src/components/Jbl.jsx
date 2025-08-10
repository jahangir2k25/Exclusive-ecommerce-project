import JblImg from '../assets/jbl.png';
import Container from './Container';
import Counter from './Counter';

const Jbl = () => {
    return (
        <>
            <Container>
                <div className='lg:mt-35 mt-15 relative'>
                    <img src={JblImg} alt="" />
                    <div className='lg:w-110.75 absolute lg:left-14 lg:top-17.25 left-8 top-4'>
                        <h3 className='font-poppins font-semibold text-sm text-[#00FF66] '>Categories</h3>
                        <h4 className='font-inter font-semibold text-white lg:text-[48px] lg:py-8 py-2'>Enhance Your Music Experience</h4>
                        <Counter className='text-white mt-30'/>
                        <button className='lg:px-12 lg:py-4 px-3 py-2 bg-[#00FF66] text-white lg:text-2xl text-xs hover:bg-[#00ff66dd]'>Buy Now!</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Jbl;
