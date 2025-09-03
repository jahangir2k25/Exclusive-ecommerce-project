import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Card from '../components/Card';
import { RiDeleteBinLine } from "react-icons/ri";
import bag from '../assets/whishlist/bag.png';
import box from '../assets/whishlist/box.png';
import remote from '../assets/whishlist/remote.png';
import jecket from '../assets/whishlist/jecket.png';
import star from '../assets/whishlist/star.png';
import laptop from '../assets/whishlist/laptop.png';
import desktop from '../assets/whishlist/desktop.png';
import game from '../assets/whishlist/game.png';
import keyboat from '../assets/whishlist/keyboat.png';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import SecHead from '../components/SecHead';


const Wishlist = () => {
    return (
        <>
            <Container>
                <div className='mt-5 lg:mt-20'>
                    <BreadCrumb />
                </div>

                <div className=''>
                    <div className='flex justify-end mt-10'>
                        <button className='px-4 py-2 border-1  hover:text-white hover:border-primary hover:bg-primary duration-300'>Move All To Bag</button>
                    </div>

                    <div className='mt-[60px] flex gap-6'>
                        <Card
                            discount="-35%"
                            img={bag}
                            heading="Gucci duffle bag"
                            price="$960"
                            pastprice='$1160'
                            rating='(88)'
                        />

                        <Card
                            img={box}
                            heading="RGB liquid CPU Cooler"
                            pice="$960"
                            pastprice='$1160'
                            rating='(88)'
                        />

                        <Card
                            img={remote}
                            heading="GP11 Shooter USB Gamepad"
                            price="$560"
                            pastprice='$1160'
                            rating='(88)'
                        />

                        <Card
                            img={jecket}
                            heading="Quilted Satin Jacket"
                            price="$200"
                            pastprice='$1160'
                            rating='(88)'
                        />
                    </div>

                    <div className='flex justify-between mt-42.5'>
                        <SecHead
                            title="Just For You"
                        />
                        <button className='px-4 py-2 border-1 hover:text-white hover:border-primary hover:bg-primary duration-300'>See All</button>
                    </div>

                    <div className='flex gap-6 mt-[80px]'>
                        <Card
                            discount="-35%"
                            img={laptop}
                            heading="ASUS FHD Gaming Laptop"
                            price="$960"
                            pastprice='$1160'
                            rating='(88)'
                        />

                        <Card
                            img={desktop}
                            heading="IPS LCD Gaming Monitor"
                            price="$1160"
                            pastprice='$1360'
                            rating='(88)'
                        />

                        <Card
                            img={game}
                            heading="HAVIT HV-G92 Gamepad"
                            price="$560"
                            pastprice='$1160'
                            rating='(88)'
                        />

                        <Card
                            img={keyboat}
                            heading="AK-900 Wired Keyboard"
                            price="$200"
                            pastprice='$1160'
                            rating='(88)'
                        />
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Wishlist;