const JisaTitleContentVerde = ({ contenido, className = "" }) => {
    return (
        <span className={`md:text-left text-center text-JisaVerde font-medium  ${className}`} >
            {contenido}
        </span>
    )
}

export default JisaTitleContentVerde
