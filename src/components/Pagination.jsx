import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './Card';

const Pagination = ({ itemsPerPage, products }) => {
    const items = products;

    function Items({ currentItems }) {
        return (
            <>
                <div className='flex flex-wrap justify-between gap-6'>
                    {currentItems &&
                        currentItems.map((items) => (
                            <Card
                                img={items.thumbnail}
                                heading={items.title}
                                price={items.price}
                                pastprice={Math.floor(items.price / (1 - items.discountPercentage / 100))}
                                rating={items.rating}
                                discount={items.discountPercentage}
                                review={items.reviews[0].rating}
                            />

                        ))}
                </div>
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className='flex gap-2 mt-4'
                pageClassName='px-6 py-0.5 text-white bg-black cursor-pointer'
            />
        </>
    )
}

export default Pagination;
