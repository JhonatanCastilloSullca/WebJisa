import { NavLink } from "react-router-dom"
import BlogCard from "../BlogCard"
import GridNumber from "../GridNumber"
import HeaderTitle from "../layout/HeaderTitle"
import SubHeaderTitle from "../layout/SubHeaderTitle"
import RowNumber from "../RowNumber"
import SeparatorBarHorizontal from "../SeparatorBarHorizontal"
import { useTranslation } from "react-i18next"

const BlogSection = ({ id , data }) => {
    const { t } = useTranslation()
    return (
        <div id={id} className="w-full max-w-7xl mx-auto md:my-12 my-12 pb-1 mb-2 ">
            <div className="flex-col justify-center flex items-center py-10">
                <HeaderTitle title={t("blog_section.titulo")} etiqueta="h2"/>
                <SubHeaderTitle title={t("blog_section.description")} />
                <SubHeaderTitle title={t("blog_section.description2")} />
                <SeparatorBarHorizontal />
            </div>

            <div className="w-full max-w-6xl mx-auto md:px-0 px-4">

                <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                    {data.map((blog,index) => (
                        <RowNumber col={4} key={index}>
                            <BlogCard
                                title={blog.categoriablog.nombre}
                                image={blog.imagen}
                                location=""
                                description={blog.titulo}
                                context={blog.resumen}
                                author="Jisa Adventure"
                                fecha={blog.fecha}
                                slug={blog.slug}
                            />
                        </RowNumber>
                    ))}
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