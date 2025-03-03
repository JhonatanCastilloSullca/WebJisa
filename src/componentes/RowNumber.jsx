const RowNumber = ({ col, children, className = "" }) => {
    return (
        <div className={`md:col-span-4 col-span-12  h-auto flex ${className}`}>
            {children}
        </div>
    );
};


export default RowNumber