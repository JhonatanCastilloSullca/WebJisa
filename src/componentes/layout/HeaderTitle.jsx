const HeaderTitle = ({ title, etiqueta = 'h3' }) => {
    const Tag = etiqueta;
    
    return (
        <h3 className="uppercase text-JisaCyan font-semibold md:text-5xl text-4xl md:text-left text-center" >{title}</h3>
    )
}

export default HeaderTitle