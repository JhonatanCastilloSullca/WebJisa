
const IconText = ({ icon: Icon, text }) => {
    return (
        <div className="contactos-header flex gap-x-2 ">
            {Icon && <Icon size={20} />}
            <span className="md:text-base text-sm">{text}</span>
        </div>
    );
};

export default IconText