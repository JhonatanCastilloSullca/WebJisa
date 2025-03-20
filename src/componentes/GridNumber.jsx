const GridNumber = ({ col, children, className = "" }) => {
    return (
        <div className={`grid grid-cols-${col} gap-11 ${className}`}>
            {children}
        </div>
    );
};


export default GridNumber