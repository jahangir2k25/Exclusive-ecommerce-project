import { useDispatch, useSelector } from 'react-redux';
import { TiDelete } from "react-icons/ti";
import { deleteReducer, quantityReducer } from '../Slices/ProductSlices';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const CartItem = ({ img, title, price, total, id, quantity }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteReducer(id))
    }

    const handleIncrement = () => {
        dispatch(quantityReducer([id, quantity + 1, price]))
    }
    const handleDecrement = () => {
        if (quantity > 0) {
            dispatch(quantityReducer([id, quantity - 1, price]))
        }
    }


    return (
        <div className='flex justify-between py-6 px-10 shadow rounded-sm my-10'>
            <div className='flex justify-center items-center gap-5'>
                <div className='relative'>
                    <img className='w-12.5 h-10.5' src={img} alt="" />
                    <TiDelete onClick={handleDelete} className='absolute -top-1 left-2 text-2xl text-primary rounded-full cursor-pointer' />
                </div>
                <h2>{`${title.slice(0, 15)} ....`}</h2>
            </div>
            <h2>{price}</h2>
            <div className='flex justify-center items-center gap-3 border-1 py-1.5 px-3 rounded-sm'>
                <h1>{quantity}</h1>
                <div>
                    <IoIosArrowUp onClick={handleIncrement} className='cursor-pointer' />
                    <IoIosArrowDown onClick={handleDecrement} className='cursor-pointer' />
                </div>
            </div>
            <h2>{total}</h2>
        </div>
    )
}

export default CartItem;
