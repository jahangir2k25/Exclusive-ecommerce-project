
const ListUl = ({ children, className }) => {
    return (
        <>
            <li className={`${className} capitalize`}>
                {children}
            </li>
        </>
    )
}

export default ListUl;
