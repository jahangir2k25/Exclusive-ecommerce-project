import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Button from '../components/Button';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const AtToCart = () => {

  const productCart = useSelector((state) => state.allProduct.cart)
  const subTotal = useSelector((state) => state.allProduct.subTotal)
  // console.log(subTotal);

  return (
    <>
      <Container>
        <div className='lg:mt-20 mt-6'>
          <BreadCrumb />
        </div>
        <div>
          <div className='flex justify-between lg:py-7.25 lg:px-10 py-4 px-7 lg:mt-20 mt-6 shadow rounded-sm'>
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </div>
          <div className='select-none'>
            {
              productCart.map((item, idx) => (
                <CartItem
                  key={idx}
                  id={item.id}
                  index={idx}
                  img={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  total={item.price}
                  quantity={item.quantity}
                />
              ))
            }
          </div>
        </div>

        <div className='flex font-poppins font-medium justify-between px-2 lg:px-0 pt-6'>
          <button className='bg-transparent hover:bg-black text-black hover:text-white duration-300 lg:px-12 lg:py-4 px-6 py-2 border-1 cursor-pointer rounded-sm'>Return To Shop</button>
          <button className='bg-transparent hover:bg-black text-black hover:text-white duration-300 lg:px-12 lg:py-4 px-6 py-2 border-1 cursor-pointer rounded-sm'>Update Cart</button>
        </div>

        <div className='lg:flex justify-between lg:mt-20 mt-6'>
          <div>
            <div className='flex justify-center items-center gap-4'>
              <input type="text"
                placeholder='Coupon Code'
                className='lg:w-82.5 lg:py-4 lg:pl-4 w-50 py-2 pl-2 border-1 rounded-sm focus:outline-none' />
              <Button className='bg-primary hover:bg-[#9a0606] lg:px-12 lg:py-4 px-8 py-2 rounded-sm'>Apply Coupon</Button>
            </div>
          </div>

          <div className='lg:w-117.5 lg:px-6 px-4 font-poppins border-1 mt-6 lg:mt-0 rounded-sm'>
            <h2 className='text-xl font-medium pt-8 pb-6'>Cart Total</h2>
            <div className='flex justify-between border-b-2 border-secondary pb-4'>
              <h2>Subtotal:</h2>
              <h2>${(subTotal).toFixed(2)}</h2>
            </div>
            <div className='flex justify-between border-b-2 border-secondary py-4'>
              <h2>Shipping:</h2>
              <h2>Free</h2>
            </div>
            <div className='flex justify-between border-b-2 border-secondary py-4'>
              <h2>Total:</h2>
              <h2>${(subTotal).toFixed(2)}</h2>
            </div>
            <div className='mt-4 mb-8'>
              <Button className='bg-primary hover:bg-[#9a0606] lg:px-12 lg:py-4 px-10 py-2 rounded-sm'>Procees to checkout</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AtToCart;
