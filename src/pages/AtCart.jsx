import Container from '../components/Container';
import Game1 from '../assets/Cgame1.png';
import Game2 from '../assets/Cgame2.png';
import { IoStar } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import BreadCrumb from '../components/BreadCrumb';
import Size from '../components/Size';




const AtCart = () => {
    return (
        <>
            <Container>
                <div className='mt-5 mb-20'>
                    <BreadCrumb />
                </div>

                <div className='flex gap-7.5'>
                    <div className='space-y-4'>
                        <div className='bg-secondary rounded-sm flex justify-between items-center'>
                            <img className='px-6 py-3' src={Game2} alt="" />
                        </div>
                        <div className='bg-secondary rounded-sm flex justify-between items-center'>
                            <img className='px-6 py-3' src={Game2} alt="" />
                        </div>
                        <div className='bg-secondary rounded-sm flex justify-between items-center'>
                            <img className='px-6 py-3' src={Game2} alt="" />
                        </div>
                        <div className='bg-secondary rounded-sm flex justify-between items-center'>
                            <img className='px-6 py-3' src={Game2} alt="" />
                        </div>
                    </div>

                    <div className='bg-secondary flex justify-between items-center'>
                        <img className='px-6.75 pt-38.5 pb-32.75' src={Game1} alt="" />
                    </div>

                    <div className='w-99.75'>
                        <div>
                            <h2 className='font-inter font-semibold text-2xl'>Havic HV G-92 Gamepad</h2>
                        </div>

                        <div className='mt-4 flex gap-6'>
                            <div className='flex gap-2 text-[#FFAD33]'>
                                <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
                            </div>
                            <div>
                                <h4 className='text-[#807b7b] font-Poppins text-sm'>(150 Reviews)</h4>
                            </div>
                            <div className='border-[#807b7b] border-r-2'></div>
                            <div>
                                <h4 className='text-[#00FF66] font-Poppins text-sm'>In Stock</h4>
                            </div>
                        </div>

                        <div className='border-b-2 border-secondary mt-4'>
                            <h4 className='text-2xl font-inter'>$192.00</h4>
                            <p className='text-sm font-poppins py-6'>PlayStation 5 Controller Skin High quality vinyl with air  channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                        </div>

                        <div className="flex items-center gap-4 py-6">
                            <h2 className="text-[20px]">Colours:</h2>
                            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-blue-300" />
                            </div>
                            <div className="w-6 h-6 rounded-full bg-rose-500" />
                        </div>

                        <div className='flex gap-6 items-center'>
                            <h2 className='text-xl font-inter'>Size:</h2>
                            <Size
                                heading='xs'
                            />
                            <Size
                                heading='s'
                            />
                            <Size
                                heading='m'
                            />
                            <Size
                                heading='l'
                            />
                            <Size
                                heading='xl'
                            />
                        </div>

                        <div className='flex mt-6 gap-4'>
                            <div className="flex items-center justify-between border border-gray-300 rounded-md overflow-hidden w-max text-lg font-medium">
                                <button className="w-10 h-10 border-r border-secondary hover:bg-primary">−</button>
                                <h2 className="w-10 h-10 flex items-center justify-center hover:bg-primary">
                                    2
                                </h2 >
                                <button className="w-10 h-10 border-l border-secondary hover:bg-primary rounded-r-md">
                                    +
                                </button>

                            </div>

                            <button className="w-[165px] h-[44px] bg-primary hover:bg-[#9d0606] text-white rounded-md  ">Buy Now</button>

                            <div className='flex justify-center items-center w-10 h-10 border-2 border-secondary hover:bg-primary hover:text-white rounded-md '>
                                <FiHeart />
                            </div>
                        </div>

                        <div>
                            <div className='border-2 border-secondary mt-6'>
                                <div className='flex gap-6 mt-4  border-b-2 border-secondary pb-4'>
                                    <div className='mt-2.5 text-2xl pl-4'>
                                        <TbTruckDelivery />
                                    </div>
                                    <div>
                                        <h4 className='font-medium'>Free Delivery</h4>
                                        <p className='text-[12px] border-b'>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>

                                <div className='flex gap-6 pt-4 pb-6 '>
                                    <div className='mt-2.5 text-2xl pl-4'>
                                        <HiOutlineArrowPathRoundedSquare />
                                    </div>
                                    <div>
                                        <h4 className='font-medium'>Return Delivery</h4>
                                        <p className='text-[12px]'>Free 30 Days Delivery Returns. Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-6 '>
                    <div className='w-[20px] h-[40px] bg-primary mt-[170px] rounded-[4px]'>
                    </div>
                    <div className='text-primary font-semibold text-[16px] mt-[180px]'>Related Item</div>
                </div>

                {/* <div className='flex justify-between mt-10'>
                    <Cart
                        per="-40%"
                        show={true}
                        heart={heart}
                        eye={eye}
                        game={game}
                        black="Add To Cart"
                        head="HAVIT HV-G92 Gamepad"
                        pera="$120"
                        peraa="$160"
                        star={star}
                        pg="(88)"
                    />

                    <Cart
                        per="-35%"
                        show={true}
                        heart={heart}
                        eye={eye}
                        game={keyboat}
                        black="Add To Cart"
                        head="AK-900 Wired Keyboard"
                        pera="$960"
                        peraa="$1160"
                        star={star}
                        pg="(75)"
                    />

                    <Cart
                        per="-30%"
                        show={true}
                        heart={heart}
                        eye={eye}
                        game={desktop}
                        black="Add To Cart"
                        head="IPS LCD Gaming Monitor"
                        pera="$370"
                        peraa="$400"
                        star={star}
                        pg="(99)"
                    />
                    <Cart
                        per="-25%"
                        show={true}
                        heart={heart}
                        eye={eye}
                        game={box}
                        black="Add To Cart"
                        head="S-Series Comfort Chair "
                        pera="$375"
                        peraa="$400"
                        star={star}
                        pg="(99)"
                    />
                </div> */}
            </Container>
        </>
    )
}

export default AtCart;