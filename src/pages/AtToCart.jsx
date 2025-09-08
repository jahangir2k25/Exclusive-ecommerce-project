import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Button from '../components/Button';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const AtToCart = () => {

  const productCart = useSelector((state) => state.allProduct.cart)

  return (
    <>
      <Container>
        <div className='mt-20'>
          <BreadCrumb />
        </div>
        <div>
          <div className='flex justify-between py-7.25 px-10 shadow rounded-sm mt-20'>
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

        <div className='flex font-poppins font-medium justify-between pt-6'>
          <button className='bg-transparent hover:bg-black text-black hover:text-white duration-300 px-12 py-4 border-1 cursor-pointer rounded-sm'>Return To Shop</button>
          <button className='bg-transparent hover:bg-black text-black hover:text-white duration-300 px-12 py-4 border-1 cursor-pointer rounded-sm'>Update Cart</button>
        </div>

        <div className='flex justify-between mt-20'>
          <div>
            <div className='flex justify-center items-center gap-4'>
              <input type="text"
                placeholder='Coupon Code'
                className='w-82.5 py-4 pl-4 border-1 rounded-sm focus:outline-none' />
              <Button className='bg-primary hover:bg-[#9a0606] px-12 py-4 rounded-sm'>Update Cart</Button>
            </div>
          </div>

          <div className='w-117.5 font-poppins border-1 px-6 rounded-sm'>
            <h2 className='text-xl font-medium pt-8 pb-6'>Cart Total</h2>
            <div className='flex justify-between border-b-2 border-secondary pb-4'>
              <h2>Subtotal:</h2>
              <h2>$1750</h2>
            </div>
            <div className='flex justify-between border-b-2 border-secondary py-4'>
              <h2>Shipping:</h2>
              <h2>Free</h2>
            </div>
            <div className='flex justify-between border-b-2 border-secondary py-4'>
              <h2>Total:</h2>
              <h2>$1750</h2>
            </div>
            <div className='mt-4 mb-8'>
              <Button className='bg-primary hover:bg-[#9a0606] px-12 py-4 rounded-sm'>Procees to checkout</Button>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default AtToCart;
