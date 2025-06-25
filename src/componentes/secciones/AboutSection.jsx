import HeaderTitle from "../layout/HeaderTitle"
import JisaTitleContentVerde from "../layout/JisaTitleContentVerde"
import ParrafoContent from "../layout/ParrafoContent"
import SeparatorBarHorizontal from "../SeparatorBarHorizontal"

const AboutSection = ({ id, data }) => {
    return (
        <div id={id} className="w-full max-w-7xl mx-auto mt-24 mb-12">
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-7 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                    <JisaTitleContentVerde contenido={data.subtitulo} />
                    <HeaderTitle title={data.titulo} />
                    <SeparatorBarHorizontal />
                    <ParrafoContent className="text-JisaGris"
                        contenido={data.descripcion}
                    />
                </div>
                <div className="md:col-span-5 col-span-12 h-[400px] flex flex-col md:items-start items-center justify-center">
                    <img
                        src={data.imagen}
                        alt={data.titulo}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection