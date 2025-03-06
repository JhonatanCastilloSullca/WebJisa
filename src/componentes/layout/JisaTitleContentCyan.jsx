const JisaTitleContentCyan = ({ contenido, className = "" }) => {
    return (
        <span className={`md:text-left text-center text-JisaCyan font-medium  ${className}`} >
            {contenido}
        </span>
    )
}

export default JisaTitleContentCyan
