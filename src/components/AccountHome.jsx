import React from 'react'
import Container from './Container'
import Navbar from './NavBar'

const AccountHome = () => {
    return (
        <>
            <Container>
                <Navbar />

                <div className='flex gap-10'>
                    <div>
                        <div>
                            <div className='flex justify-between mt-10'>
                                <h3>Home / My Account</h3>
                                <h3>Welcome! <span className='text-[#DB4444]'>Md Rimel</span></h3>
                            </div>
                        </div>

                        <div className='mt-12'>
                            <div>
                                <h3 className='font-medium text-[16px]'>Manage My Account</h3>
                            </div>
                            <div className=' space-y-2 p-6'>
                                <p className='text-[#DB4444]'>My Profile</p>
                                <p>Address Book</p>
                                <p>My Payment Options</p>
                            </div>

                            <div className=''>
                                <div>
                                    <h3 className='font-medium text-[16px]'>My Orders</h3>
                                </div>
                                <div className=' space-y-2 p-6'>

                                    <p>My Returns</p>
                                    <p>My Cancellations</p>
                                </div>
                            </div>

                            <div>
                                <h3 className='font-medium text-[16px]'>My WishList</h3>
                            </div>
                        </div>

                    </div>

                    <div className='mt-[120px]'>
                        <div>
                            <h3 className='text-[#DB4444] font-medium text-[20px]'>Edit Your Profile</h3>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-[#7D8184]'>First Name</h3>
                            <input type="" placeholder='Md' className='w-[330px] h-[50px]  bg-[#F5F5F5] mt-2 p-2' />
                        </div>

                        <div className='mt-4'>
                            <h3 className='text-[#7D8184]'>Email</h3>
                            <input type="" placeholder='rimel1111@gmail.com' className='w-[330px] h-[50px]  bg-[#F5F5F5] mt-2 p-2' />
                        </div>

                        <div className='mt-4'>
                            <h3 className=''>Password Changes</h3>
                            <input type="" placeholder='Current Passwod' className='w-[330px] h-[50px]  bg-[#F5F5F5] mt-4 p-2' />
                        </div>

                        <div>
                            <input type="" placeholder='New Passwod' className='w-[330px] h-[50px]  bg-[#F5F5F5] mt-4 p-' />
                        </div>

                        <div>
                            <input type="" placeholder='Confirm New Passwod' className='w-[330px] h-[50px]  bg-[#F5F5F5] mt-4 p-2' />
                        </div>
                    </div>

                    <div className='mt-[150px] '>
                        <div className='mt-4'>
                            <h3 className='text-[#7D8184]'>Last Name</h3>
                            <input type="" placeholder='Rimel' className='w-[330px] h-[50px]  bg-[#F5F5F5] mt-2 p-2' />
                        </div>

                        <div className='mt-4'>
                            <h3 className='text-[#7D8184]'>Address</h3>
                            <input type="" placeholder='Kingston, 5236, United State' className='w-[330px] h-[50px]  bg-[#F5F5F5] mt-2 p-2' />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex gap-6 mt-6 ml-[480px]'>
                        <p className='mt-4'>Cancel</p>
                        <button className='w-[214px] h-[56px] bg-[#DB4444] text-white rounded-xl' >Save Changes</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AccountHome