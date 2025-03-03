const BoxCard = ({ title, color }) => {
    return (
        <div
            className={`px-6 py-1 rounded-md w-min absolute top-3 left-3 text-sm font-semibold text-white z-10 ${color ? "" : "bg-JisaCyan"
                }`}
            style={color ? { backgroundColor: color } : {}}
        >
            {title}
        </div>
    );
};

export default BoxCard;
