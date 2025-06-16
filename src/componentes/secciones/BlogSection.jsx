import { NavLink } from "react-router-dom"
import BlogCard from "../BlogCard"
import GridNumber from "../GridNumber"
import HeaderTitle from "../layout/HeaderTitle"
import SubHeaderTitle from "../layout/SubHeaderTitle"
import RowNumber from "../RowNumber"
import SeparatorBarHorizontal from "../SeparatorBarHorizontal"
import { useTranslation } from "react-i18next"

const BlogSection = ({ id }) => {
    const { t } = useTranslation()
    return (
        <div id={id} className="w-full max-w-7xl mx-auto md:my-12 my-12 pb-24 mb-12 ">
            <div className="flex-col justify-center flex items-center py-10">
                <HeaderTitle title={t("blog_section.titulo")} />
                <SubHeaderTitle title={t("blog_section.description")} />
                <SeparatorBarHorizontal />
            </div>

            <div className="w-full max-w-6xl mx-auto md:px-0 px-4">

                <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                    <RowNumber col={4}>
                        <BlogCard
                            title="Grupal"
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                            location="Montaña de Colores Palccoyo, Cusco"
                            description="Rainbow Mountain Vinicunca Tour (Group Service)"
                            context="Tips antes de salir de noche en Cusco Es importante tomar en cuenta que salir de noche en Cusco es algo peligroso y no por la inseguridad de las calles, sino por los distintos factores climatológicos..."
                            author="Jisa Adventure"
                            fecha="Ago 15, 2024"
                        />
                    </RowNumber>
                    <RowNumber col={4}>
                        <BlogCard
                            title="Grupal"
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                            location="Montaña de Colores Palccoyo, Cusco"
                            description="Rainbow Mountain Vinicunca Tour (Group Service)"
                            context="Tips antes de salir de noche en Cusco Es importante tomar en cuenta que salir de noche en Cusco es algo peligroso y no por la inseguridad de las calles, sino por los distintos factores climatológicos..."
                            author="Jisa Adventure"
                            fecha="Ago 15, 2024"
                        />
                    </RowNumber>
                    <RowNumber col={4}>
                        <BlogCard
                            title="Nocturno"
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                            location="Montaña de Colores Palccoyo, Cusco"
                            description="Rainbow Mountain Vinicunca Tour (Group Service)"
                            context="Tips antes de salir de noche en Cusco Es importante tomar en cuenta que salir de noche en Cusco es algo peligroso y no por la inseguridad de las calles, sino por los distintos factores climatológicos..."
                            author="Jisa Adventure"
                            fecha="Ago 15, 2024"
                            color="#987654"
                        />
                    </RowNumber>
                </GridNumber>

                <div className="w-full flex justify-center py-6">
                    <NavLink to={'/blogs'}>
                        <span className="font-bold text-JisaVerde text-xl">{t("blog_section.ver_mas")}</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default BlogSection