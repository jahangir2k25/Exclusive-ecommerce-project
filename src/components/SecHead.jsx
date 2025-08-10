
const SecHead = ({title, heading}) => {
    
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h5 className="flex items-center text-primary font-semibold border-l-20 pl-4 h-10 rounded-sm font-poppins"> {title} </h5>
                    <h5 className='lg:text-[36px] text-2xl pt-6 font-semibold font-poppins'> {heading} </h5>
                </div>
            </div>
        </>
    )
}

export default SecHead;
