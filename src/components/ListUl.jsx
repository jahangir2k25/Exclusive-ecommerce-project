
const ListUl = ({ children, className }) => {
    return (
        <>
            <ul className={`${className}`}>
                {children}
            </ul>
        </>
    )
}

export default ListUl;
