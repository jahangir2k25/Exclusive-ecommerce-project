import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Button from '../components/Button';

const Error = () => {
  return (
    <>
      <Container>
        <div className='my-20'>
          <BreadCrumb />
        </div>
        <div>
          <h2 className='text-[110px] font-medium text-center'>404 - Page Not Found</h2>
          <p className='text-center mt-10 mb-20'>Your visited page not found. You may go home page.</p>
          <div>
            <Button className='mx-auto py-4 px-12 bg-primary hover:bg-[#a90808] rounded-sm block'>Back to home page</Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Error;
