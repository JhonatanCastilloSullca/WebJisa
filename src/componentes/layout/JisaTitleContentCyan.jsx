const JisaTitleContentCyan = ({ contenido, className = "" }) => {
    return (
        <h2 className={`md:text-left text-center text-JisaCyan font-medium  ${className}`} >
            {contenido}
        </h2>
    )
}

export default JisaTitleContentCyan
