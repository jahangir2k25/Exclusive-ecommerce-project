import { useEffect, useState } from 'react';
import Container from '../components/Container';
import { FiHeart } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import BreadCrumb from '../components/BreadCrumb';
import Size from '../components/Size';
import axios from 'axios';
import { useParams } from "react-router";
import { Rate } from 'antd';



const ProductDetails = () => {
    const [products, setProducts] = useState({});
    const [productImages, setProductImages] = useState([]);
    const [productReviews, setProductReviews] = useState([]);

    const { id } = useParams();
    async function getAllProducts() {
        let data = await axios.get(`https://dummyjson.com/products/${id}`)
        setProducts(data.data);
        setProductImages(data.data.images);
        setProductReviews(data.data.reviews);

        // dispatch(productReducer(data.data.products))
        // setLoading(false);
    }

    useEffect(() => {
        getAllProducts();

    }, []);

    return (
        <>
            <Container>
                <div className='mt-5 mb-20'>
                    <BreadCrumb />
                </div>

                <div className='flex gap-7.5'>
                    <div className='space-y-4'>
                        {
                            productImages.map((images, id) => {
                                return (
                                    <div key={id} className='bg-[#f5f5f5] rounded-sm '>
                                        <img className='w-42.5 h-34.5' src={images} alt="" />
                                    </div>
                                );
                            })
                        }

                        {/* <div className='bg-[#f5f5f5] rounded-sm flex justify-between items-center'>
                            <img className='px-6 py-3' src={Game2} alt="" />
                        </div>
                        <div className='bg-[#f5f5f5] rounded-sm flex justify-between items-center'>
                            <img className='px-6 py-3' src={Game2} alt="" />
                        </div>
                        <div className='bg-[#f5f5f5] rounded-sm flex justify-between items-center'>
                            <img className='px-6 py-3' src={Game2} alt="" />
                        </div>
                        <div className='bg-[#f5f5f5] rounded-sm flex justify-between items-center'>
                            <img className='px-6 py-3' src={Game2} alt="" />
                        </div> */}
                    </div>

                    <div className='bg-[#f5f5f5] flex justify-between items-center'>
                        <img className='w-125 h-150' src={products.thumbnail} alt="" />
                    </div>

                    <div className='w-99.75'>
                        <div>
                            <h2 className='font-inter font-semibold text-2xl'>{products.title}</h2>
                        </div>

                        <div className='mt-4 flex gap-6'>
                            <div className='flex gap-2 text-[#FFAD33]'>
                                <Rate value={products.rating} />
                            </div>
                            <div>
                                <h4 className='text-[#807b7b] font-Poppins text-sm'>
                                    ( {productReviews.length} Reviews )
                                </h4>
                            </div>
                            <div className='border-[#807b7b] border-r-2'></div>
                            <div>
                                <h4 className='text-[#00FF66] font-Poppins text-sm'>In Stock</h4>
                            </div>
                        </div>

                        <div className='border-b-2 border-secondary mt-4'>
                            <h4 className='text-2xl font-inter'>${products.price}</h4>
                            <p className='text-sm font-poppins py-6'>{products.description}</p>
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
            </Container>
        </>
    )
}

export default ProductDetails;