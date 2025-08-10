import { useLocation } from 'react-router';


const BreadCrumb = () => {
    let {pathname} = useLocation()
    let PathnameLocation = pathname.split('/')

    return (
        <>
            <div className='flex gap-3.5 pl-4 lg:pl-0 text-gray-500'>
                <h2>Home</h2>
                <h2>/</h2>
                <h2>{PathnameLocation}</h2>
            </div>
        </>
    )
}

export default BreadCrumb;
