import { useEffect, useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import ListUl from "../components/ListUl";
import ListLi from "../components/ListLi"
import Container from "../components/Container";
import axios from 'axios';
import Card from '../components/Card';

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className='lg:flex justify-between gap-5'>
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

          <div className="lg:w-[75%] w-full lg:flex flex-wrap justify-between grid grid-cols-2 gap-5 pt-8 lg:pt-0">
            {
              loading ?
                <div className='flex justify-between gap-20'>
                  <div role="status" className="max-w-sm p-4 rounded-sm animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="mt-4">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div role="status" className="max-w-sm p-4 rounded-sm animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="mt-4">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div role="status" className="max-w-sm p-4 rounded-sm animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="mt-4">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                :
                products.map((products) => {
                  return (
                    <Card
                      img={products.thumbnail}
                      heading={products.title}
                      price={products.price}
                      pastprice={Math.floor(products.price / (1 - products.discountPercentage / 100))}
                      rating={products.rating}
                      discount={products.discountPercentage}
                      review={products.reviews[0].rating}
                    />
                  )
                })
            }
          </div>

        </div>
      </Container>
    </>
  )
}

export default Shop;
