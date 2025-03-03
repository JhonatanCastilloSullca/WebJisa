import { useParams } from 'react-router-dom'

const PaqueteDetail = () => {
    const slug = useParams()
    return (
        <>
            <h1 className="text-3xl font-bold">Pagina del Paquetes: {slug}</h1>
        </>
    )
}

export default PaqueteDetail