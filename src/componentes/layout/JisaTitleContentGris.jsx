const JisaTitleContentGris = ({ contenido, className = "" }) => {
    return (
        <span className={`md:text-left text-center text-JisaGris font-medium  ${className}`} >
            {contenido}
        </span>
    )
}

export default JisaTitleContentGris
