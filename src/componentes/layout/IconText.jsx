
const IconText = ({ icon: Icon, text, enlace }) => {
    const content = (
        <div className="contactos-header flex gap-x-1 items-center">
            {Icon && <Icon size={12} />}
            <span className="md:text-base text-[10px]">{text}</span>
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