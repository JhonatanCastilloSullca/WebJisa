import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const { slug } = useParams();
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold">Detalles del Blog: {slug}</h1>
            </div>
        </>
    )
}

export default BlogDetail