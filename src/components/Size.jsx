import React from 'react';

const Size = ({ heading, children }) => {
    return (
        <>
            <div>
                <h3 className='text-[20px]'>{children}</h3>
                <h4 className='px-2 py-2 text-sm rounded-sm border-2 border-secondary font-poppins font-medium hover:bg-primary uppercase cursor-pointer'>{heading}</h4>
            </div>

        </>
    )
}

export default Size;
