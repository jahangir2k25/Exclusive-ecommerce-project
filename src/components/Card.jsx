import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import Button from './Button';
import { Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cartReducer, subTotalReducer, wishlistReducer } from "../Slices/ProductSlices";
import { toast, Bounce } from 'react-toastify';


const Card = ({ img, heading, price, pastprice, rating, reviews, discount, id, productDetails }) => {

    const data = useSelector((state) => state.allProduct.cart)
    // console.log(data);
    const notify = (param) =>
        param == undefined ?
            toast.success('Successfully added to Cart', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            }) : toast.warn('Already added to Cart!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });


    const dispatch = useDispatch()

    const navigate = useNavigate()
    function handleClick() {
        navigate(`/productdetails/${id}`)
    }

    function handleAddToCart() {
        dispatch(cartReducer({ ...productDetails, quantity: 1 }));
        const notifyData = data.find((item) => item.id == id)
        notify(notifyData);
        dispatch(subTotalReducer());
    }

    function handleWishlist() {
        dispatch(wishlistReducer({ ...productDetails }));

        toast.success('Successfully added to Wishlist', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const [activeColor, setActiveColor] = useState(false);
    const handleChange = () => {
        setActiveColor(!activeColor);
    };

    return (
        <>
            <div className="lg:w-67.5 w-45 group mx-auto">
                <div className='bg-[#F5F5F5] flex justify-center items-center rounded-sm overflow-hidden relative'>
                    <div onClick={handleClick} className='flex justify-center items-center lg:h-62.5 h-45'>
                        <img src={img} alt="#" />
                    </div>
                    <h2 className='bg-primary text-center text-xs text-white absolute lg:left-3 lg:top-3 left-1.5 top-1 lg:px-3 lg:py-1 px-1 rounded-sm'>{discount}</h2>
                    <div className='absolute text-2xl right-3 top-3'>
                        <div className='bg-white  h-6 w-6 lg:h-8.5 lg:w-8.5 rounded-full flex justify-center items-center cursor-pointer'>
                            <div onClick={handleWishlist}>
                                <FaHeart
                                    onClick={handleChange}
                                    className={`cursor-pointer transition duration-300 ${activeColor ? "text-red-500" : "text-black"}`}
                                />
                            </div>

                        </div>
                        <div className='bg-white h-6 w-6 lg:h-8.5 lg:w-8.5 rounded-full mt-2 flex justify-center items-center'>
                            <IoMdEye />
                        </div>
                    </div>
                    <div className='absolute -bottom-10.5 group-hover:bottom-0 duration-300 ease-linear left-0 w-full'>
                        <Button onClick={handleAddToCart} className='lg:py-2.25 w-full select-none'>Add To Cart</Button>
                    </div>
                </div>
                <div className="#">
                    <h2 className='font-medium pt-4'>{heading}</h2>
                    <div className='flex gap-3'>
                        <h2 className='text-primary font-bold py-2'>{price} </h2>
                        <h2 className='text-secondary font-bold py-2 line-through'>{pastprice}</h2>
                    </div>
                    <div className='flex text-[#FFAD33] text-sm items-center gap-2'>
                        <Rate value={rating} />
                        <h2 className='text-secondary'>({reviews})</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
