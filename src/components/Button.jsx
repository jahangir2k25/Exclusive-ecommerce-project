
const Button = ({ children, className, onClick }) => {
    return (
        <>
            <div className="text-center">
                <button onClick={onClick} className={`${className} text-white text-center font-medium bg-black cursor-pointer`}>
                    {children}
                </button>
            </div>
        </>
    );
};

export default Button;

