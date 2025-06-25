
const IconCategoria = ({ icon: Icon, title, subtitle, tamaño = 40, className = "", tamañotitulo = "text-xl" }) => {
    return (
        <>
            <div className={`flex gap-x-4 justify-center items-center  ${className}`}>
                <Icon size={tamaño} />
                <div className="flex flex-col">
                    <span className={`font-bold ${tamañotitulo}`}>{title}</span>
                    <span className="font-light text-xs text-JisaGris">{subtitle == 1 ? 'full day' : subtitle+' day'} </span>
                </div>
            </div>
        </>
    )
}

export default IconCategoria