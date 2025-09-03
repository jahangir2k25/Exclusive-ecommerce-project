import React from 'react'

const ThirdHead = ({ items, count, heading, className }) => {
    return (
        <>
            <div>
                <div className={`${className} border-2 border-secondary hover:border-primary hover:bg-primary hover:text-white duration-300 ease-linear w-42.5 h-36.25 text-center rounded-sm mx-auto`}>
                    <h5 className='text-[56px] mt-7 flex justify-center items-center'> {items} </h5>
                    <h5 className='text-[32px] mt-5 font-inter font-bold'>{count}</h5>
                    <h5 className='font-poppins'> {heading} </h5>
                </div>
            </div>
        </>
    )
}

export default ThirdHead;
