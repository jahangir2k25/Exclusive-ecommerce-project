
const ListUl = ({ children, className, onClick }) => {
    return (
        <>
            <li className={`${className} cursor-pointer select-none hover:text-primary capitalize`} onClick={onClick}>
                {children}
            </li>
        </>
    )
}

export default ListUl;
