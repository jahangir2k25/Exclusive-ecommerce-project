import React from 'react'

const SocialIcon = ({icon}) => {
  return (
    <>
      <div className='w-10 h-10 rounded-full hover:text-black hover:bg-primary duration-400 flex justify-center items-center cursor-pointer'>
        {icon}
      </div>
    </>
  )
}

export default SocialIcon;
