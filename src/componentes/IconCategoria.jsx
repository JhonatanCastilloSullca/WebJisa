
const IconCategoria = ({ icon: Icon, title, subtitle }) => {
    return (
        <>
            <div className="flex gap-x-4 px-16 text-JisaCyan">
                <Icon size={40} />
                <div className="flex flex-col">
                    <span className="font-bold text-xl">{title}</span>
                    <span className="font-light text-xs text-JisaGris">{subtitle}</span>
                </div>
            </div>
        </>
    )
}

export default IconCategoria