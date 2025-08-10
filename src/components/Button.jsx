
const Button = ({ children, className }) => {
    return (
        <>
            <div className="text-center">
                <button className={`${className} text-white text-center font-medium bg-black cursor-pointer`}>
                    {children}
                </button>
            </div>
        </>
    );
};

export default Button;

