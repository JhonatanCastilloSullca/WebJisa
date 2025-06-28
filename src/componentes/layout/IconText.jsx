
const IconText = ({ icon: Icon, text, enlace }) => {
    const content = (
        <div className="contactos-header flex gap-x-1 items-center px-2">
            {Icon && <Icon size={10} />}
            <span className="md:text-xs text-[6px]">{text}</span>
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