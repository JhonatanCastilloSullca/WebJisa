
const IconText = ({ icon: Icon, text, enlace }) => {
    const content = (
        <div className="contactos-header flex gap-x-2 items-center">
            {Icon && <Icon size={20} />}
            <span className="md:text-base text-sm">{text}</span>
        </div>
    );
    
    return enlace ? (
        <a href={enlace} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
    ) : (
        content
    );
};

export default IconText