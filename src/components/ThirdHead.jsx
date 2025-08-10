import React from 'react'

const ThirdHead = ({ items, heading }) => {
    return (
        <>
            <div>
                <div className="border-2 border-secondary hover:bg-primary hover:text-white duration-300 ease-linear w-42.5 h-36.25 text-center rounded-sm mx-auto">
                    <h5 className='text-[56px] mt-6.25 mb-4 ml-14.25'> {items} </h5>
                    <h5 className='font-poppins'> {heading} </h5>
                </div>
            </div>
        </>
    )
}

export default ThirdHead;
