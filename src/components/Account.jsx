import Container from '../components/Container';
import BreadCrumb from './BreadCrumb';

const Account = () => {
    return (
        <>
            <Container>
                <BreadCrumb />
                <div className='mt-10'>
                    <h3>Welcome! <span className='text-primary'>Md Rimel</span></h3>
                </div>

            </Container>
        </>
    )
}

export default Account;