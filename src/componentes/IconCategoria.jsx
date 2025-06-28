
const IconCategoria = ({ icon: Icon, title, subtitle, tamaño = 40, tamañoMobile = 20, className = "", tamañotitulo = "md:text-xl text-xs" }) => {
    return (
        <>
            <div className={`flex gap-x-4 md:justify-center justify-start items-center  ${className}`}>
                <div className="md:hidden block">
                    <Icon size={tamañoMobile} />
                </div>
                <div className="md:block hidden">
                    <Icon size={tamaño} />
                </div>
                <div className="flex flex-col">
                    <span className={`font-bold ${tamañotitulo}`}>{title}</span>
                    <span className="font-light text-xs text-JisaGris">{subtitle} </span>
                </div>
            </div>
        </>
    )
}

export default IconCategoria