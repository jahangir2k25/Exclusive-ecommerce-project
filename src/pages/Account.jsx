import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Button from '../components/Button';
import ListUl from '../components/ListUl';
import ListLi from '../components/ListLi';

const Account = () => {
    return (
        <>
            <Container>
                <div className='flex justify-between mt-10 mb-20'>
                    <BreadCrumb />
                    <h2>Welcome! <span className='text-primary text-sm'>Md Rimel</span></h2>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <div>
                            <h2 className='font-poppins font-medium'>Manage My Account</h2>
                            <ListUl className='pl-10 pt-4 font-poppins'>
                                <ListLi className='text-secondary hover:text-primary'>My Profile</ListLi>
                                <ListLi className='text-secondary hover:text-primary'>Address Book</ListLi>
                                <ListLi className='text-secondary hover:text-primary'>My Payment Options</ListLi>
                            </ListUl>
                        </div>
                        <div className='pt-6'>
                            <h2 className='font-poppins font-medium'>My Orders</h2>
                            <ListUl className='pl-10 pt-4 font-poppins'>
                                <ListLi className='text-secondary hover:text-primary'>My Returns</ListLi>
                                <ListLi className='text-secondary hover:text-primary'>My Cancellations</ListLi>
                            </ListUl>
                            <h2 className='font-poppins font-medium pt-4'>My WishList</h2>
                        </div>

                    </div>

                    <div className='shadow-sm rounded-sm px-20 py-10'>
                        <h2 className='text-primary text-xl font-medium'>Edit Your Profile</h2>
                        <div className='flex gap-12.5 mt-4'>
                            <div>
                                <h2 className='font-poppins'>First Name</h2>
                                <input type="text"
                                    placeholder='Md'
                                    className='w-82.5 h-12.5 pl-4 bg-[#f5f5f5] mt-2 rounded-sm focus:outline-none' />
                            </div>
                            <div>
                                <h2 className='font-poppins'>Last Name</h2>
                                <input type="text"
                                    placeholder='Rimel'
                                    className='w-82.5 h-12.5 pl-4 bg-[#f5f5f5] mt-2 rounded-sm focus:outline-none' />
                            </div>
                        </div>

                        <div className='flex gap-12.5 mt-4'>
                            <div>
                                <h2 className='font-poppins'>Email</h2>
                                <input type="text"
                                    placeholder='rimel1111@gmail.com'
                                    className='w-82.5 h-12.5 pl-4 bg-[#f5f5f5] mt-2 rounded-sm focus:outline-none' />
                            </div>
                            <div>
                                <h2 className='font-poppins'>Address</h2>
                                <input type="text"
                                    placeholder='Kingston, 5236, United State'
                                    className='w-82.5 h-12.5 pl-4 bg-[#f5f5f5] mt-2 rounded-sm focus:outline-none' />
                            </div>
                        </div>

                        <div>
                            <div className='mt-4'>
                                <h2 className='font-poppins'>Password Changes</h2>
                                <input type="text"
                                    placeholder='Current Passwod'
                                    className='w-177.5 h-12.5 pl-4 bg-[#f5f5f5] mt-4 rounded-sm focus:outline-none' />
                            </div>

                            <div>
                                <input type="text"
                                    placeholder='New Passwod'
                                    className='w-177.5 h-12.5 pl-4 bg-[#f5f5f5] mt-4 rounded-sm focus:outline-none' />
                            </div>

                            <div>
                                <input type="text"
                                    placeholder='Confirm New Passwod'
                                    className='w-177.5 h-12.5 pl-4 bg-[#f5f5f5] mt-4 rounded-sm focus:outline-none' />
                            </div>
                        </div>

                        <div className='flex justify-end gap-6 mt-6'>
                            <h2 className='mt-4 font-poppins hover:text-primary'>Cancel</h2>
                            <Button className='bg-primary hover:bg-[#b30606] px-12 py-4 font-poppins text-white rounded-sm'>Save Changes</Button>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Account;