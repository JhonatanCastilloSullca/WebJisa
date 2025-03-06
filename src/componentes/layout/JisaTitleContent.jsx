const JisaTitleContent = ({ contenido, className = "" }) => {
    return (
        <span className={`md:text-left text-center text-JisaAmarillo font-medium  ${className}`} >
            {contenido}
        </span>
    )
}

export default JisaTitleContent
