import { useEffect, useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import ListUl from "../components/ListUl";
import ListLi from "../components/ListLi";
import Container from "../components/Container";
import axios from 'axios';
import Pagination from '../components/Pagination';
import Skeleton from '../components/Skeleton';
import { useDispatch } from 'react-redux';
import { categoryReducer, productReducer } from '../Slices/ProductSlices';


const Shop = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [optionShow, setOptionShow] = useState(6);
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch()

  async function getAllProducts() {
    let data = await axios.get('https://dummyjson.com/products')
    setProducts(data.data.products);

    dispatch(productReducer(data.data.products))
    setLoading(false);
  }

  useEffect(() => {
    getAllProducts();

  }, [])

  useEffect(() => {
    const uniqueCategory = [...new Set(products.map((item) => item.category))]
    setCategory(uniqueCategory)

  }, [products])

  function handleFilterItems(item) {
    const filterItems = products.filter((categoryItem) => categoryItem.category == item)
    dispatch(categoryReducer(filterItems))
  }

  function handleAllProducts() {
    dispatch(productReducer(products))
  }

  return (
    <>
      <Container>
        <div className='mt-5 lg:mt-20'>
          <BreadCrumb />
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-0'>
          <div className="lg:w-[25%]">
            <ListUl className="lg:mt-6 mt-3 px-4 sm:px-0 sm:pr-4 lg:leading-9.5 font-poppins capitalize">
              <h2 className='text-lg lg:text-2xl font-bold'>Shop by Category</h2>
              <ListLi onClick={handleAllProducts}>All products</ListLi>
              {
                category.map((item, id) => <ListLi key={id} onClick={() => handleFilterItems(item)}>{item}</ListLi>)
              }
            </ListUl>

            <div className='lg:mt-5 mt-0 px-4 lg:px-0'>
              <h2 className='text-lg lg:text-2xl font-bold pt-10'>Shop by Color</h2>
              <div className='flex gap-2.5 items-center py-3.75'>
                <div className='bg-black rounded-full w-2.5 h-2.5'></div>
                <h2 className='text-secondary font-poppins'>Black</h2>
              </div>
              <div className='flex gap-2.5 items-center pb-3.75'>
                <div className='bg-primary rounded-full w-2.5 h-2.5'></div>
                <h2 className='text-secondary font-poppins'>Red</h2>
              </div>
              <div className='flex gap-2.5 items-center'>
                <div className='bg-[#00FF38] rounded-full w-2.5 h-2.5'></div>
                <h2 className='text-secondary font-poppins'>Green</h2>
              </div>
            </div>
          </div>

          <div className="lg:w-[75%]">
            <div className="flex justify-end items-center gap-2 lg:mb-3.5 mb-[-15px]">
              <h2>Show:</h2>
              <select onChange={(e) => setOptionShow(e.target.value)} id='#' className="py-1 px-2 border border-gray-300 rounded-md">
                <option value='6' >6</option>
                <option value='9' >9</option>
                <option value='12' >12</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-between flex-col gap-5 pt-8 lg:pt-0">
              {
                loading ?
                  Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
                  :
                  (<Pagination itemsPerPage={optionShow} />)}

            </div>
          </div>

        </div>
      </Container>
    </>
  )
}

export default Shop;
