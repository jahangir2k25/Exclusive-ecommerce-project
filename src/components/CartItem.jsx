import { useDispatch } from 'react-redux';
import QuantityInput from '../components/Quantity';
import { TiDelete } from "react-icons/ti";
import { deleteReducer } from '../Slices/ProductSlices';

const CartItem = ({ img, title, price, total, id }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteReducer(id))
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
            <div>
                <QuantityInput />
            </div>
            <h2>{total}</h2>
        </div>
    )
}

export default CartItem;
