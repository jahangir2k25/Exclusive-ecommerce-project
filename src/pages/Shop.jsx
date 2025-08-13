import { useEffect, useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import ListUl from "../components/ListUl";
import ListLi from "../components/ListLi"
import Container from "../components/Container";
import axios from 'axios';
import Pagination from '../components/Pagination';
import Skeleton from '../components/Skeleton';



const Shop = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [optionShow, setOptionShow] = useState(6);

  async function getAllProducts() {
    let data = await axios.get('https://dummyjson.com/products')
    setProducts(data.data.products);
    setLoading(false);
  }

  useEffect(() => {
    getAllProducts();

  }, [])

  return (
    <>
      <Container>
        <BreadCrumb />
        <div className='flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-0'>
          <ListUl className="lg:w-[25%] lg:mt-6 mt-3 px-4 sm:px-0 sm:pr-4 lg:leading-9.5 font-poppins">
            <ListLi className='text-xl font-bold pb-3.75'>Shop by Category</ListLi>
            <ListLi>Woman’s Fashion </ListLi>
            <ListLi>Men’s Fashion </ListLi>
            <ListLi>Electronics</ListLi>
            <ListLi>Home & Lifestyle</ListLi>
            <ListLi>Medicine</ListLi>
            <ListLi>Sports & Outdoor</ListLi>
            <ListLi>Baby’s & Toys</ListLi>
            <ListLi>Groceries &</ListLi>
            <ListLi>Health & Beauty</ListLi>
          </ListUl>
          <div className="lg:w-[75%] w-full">
            <div className="flex justify-end items-center gap-2 lg:mb-3.5 mb-[-15px]">
              <h2>Show:</h2>
              <select onChange={(e) => setOptionShow(e.target.value)} id='#' className="py-1 px-2 border border-gray-300 rounded-md">
                <option value='6' >6</option>
                <option value='9' >9</option>
                <option value='12' >12</option>
              </select>
            </div>

            <div className="lg:flex flex-wrap justify-between grid grid-cols-2 gap-5 pt-8 lg:pt-0">
              {
                loading ?
                  Array.from({ length: 6 }).map((_, index)=> <Skeleton key={index} />)
              :
              (<Pagination itemsPerPage={optionShow} products={products} />)}

              {/* /* // products.map((products) => {
                //   return (
                //     <Card
                //       img={products.thumbnail}
                //       heading={products.title}
                //       price={products.price}
                //       pastprice={Math.floor(products.price / (1 - products.discountPercentage / 100))}
                //       rating={products.rating}
                //       discount={products.discountPercentage}
                //       review={products.reviews[0].rating}
                //     />
                //   )
                // }) */
              }

            </div>
          </div>

        </div>
      </Container>
    </>
  )
}

export default Shop;
