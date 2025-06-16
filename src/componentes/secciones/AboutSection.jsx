import HeaderTitle from "../layout/HeaderTitle"
import JisaTitleContentVerde from "../layout/JisaTitleContentVerde"
import ParrafoContent from "../layout/ParrafoContent"
import SeparatorBarHorizontal from "../SeparatorBarHorizontal"

const AboutSection = ({ id }) => {
    return (
        <div id={id} className="w-full max-w-7xl mx-auto mt-24 mb-12">
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-7 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                    <JisaTitleContentVerde contenido={`JISA ADVENTURE`} />
                    <HeaderTitle title={'¿Por qué elegir Jisa Adventure?'} />
                    <SeparatorBarHorizontal />
                    <ParrafoContent className="text-JisaGris"
                        contenido={`Con Jisa Adventure no eres un turista más. Eres un viajero que busca vivir cada lugar de verdad. 
                            Diseñamos experiencias memorables. Conectamos contigo desde el primer mensaje hasta el último paso de 
                            tu aventura. Trabajamos con pasión, con raíces locales y con el corazón puesto en cada detalle. 
                            Viajar con nosotros es viajar seguro y acompañado. `}
                    />
                </div>
                <div className="md:col-span-5 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/044/248/881/small_2x/young-tourist-with-backpack-and-map-png.png" alt="Jisa-Nosotros-Paquete" className="w-full " />
                </div>
            </div>
        </div>
    )
}

export default AboutSection