import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Card from '../components/Card';
import laptop from '../assets/whishlist/laptop.png';
import desktop from '../assets/whishlist/desktop.png';
import game from '../assets/whishlist/game.png';
import keyboat from '../assets/whishlist/keyboat.png';
import SecHead from '../components/SecHead';
import { useSelector } from 'react-redux';


const Wishlist = () => {

    const WishlistItem = useSelector((state) => state.allProduct.wishlist)

    // console.log(Wishlist);

    return (
        <>
            <Container>
                <div className='mt-5 lg:mt-20'>
                    <BreadCrumb />
                </div>

                <div className=''>
                    <div className='flex justify-end mt-10'>
                        <button className='px-4 py-2 border-1  hover:text-white hover:border-primary hover:bg-primary rounded-sm duration-300'>Move All To Bag</button>
                    </div>

                    <div className='mt-[60px] flex flex-wrap gap-6'>

                        {
                            WishlistItem.map((items, id) => {
                                return (
                                    <Card
                                        id={items.id}
                                        key={id}
                                        img={items.thumbnail}
                                        heading={items.title}
                                        price={items.price}
                                        pastprice={Math.floor(items.price / (1 - items.discountPercentage / 100))}
                                        rating={items.rating}
                                        discount={items.discountPercentage}
                                        // review={items.reviews[0].rating}
                                    />
                                )
                            })
                        }

                    </div>

                    <div className='flex justify-between mt-42.5'>
                        <SecHead
                            title="Just For You"
                        />
                        <button className='px-4 py-2 border-1 hover:text-white hover:border-primary hover:bg-primary rounded-sm duration-300'>See All</button>
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