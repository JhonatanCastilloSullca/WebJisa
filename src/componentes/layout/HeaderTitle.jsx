const HeaderTitle = ({ title, etiqueta = 'h3' }) => {
    const Tag = etiqueta;
    
    return (
        <Tag className="uppercase text-JisaCyan font-semibold md:text-5xl text-4xl md:text-left text-center" >{title}</Tag>
    )
}

export default HeaderTitle