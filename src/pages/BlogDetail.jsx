import { useParams } from "react-router-dom";
import HeroSectionMidle from "../componentes/HeroSectionMidle";
import SeparatorBarHorizontal from "../componentes/SeparatorBarHorizontal";
import JisaTitleContentVerde from "../componentes/layout/JisaTitleContentVerde";
import HeaderTitle from "../componentes/layout/HeaderTitle";
import ParrafoContent from "../componentes/layout/ParrafoContent";
import JisaTitleContentCyan from "../componentes/layout/JisaTitleContentCyan";
import InstagramIcon from "../assets/icons/InstagramIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CalendarBlog from "../componentes/CalendarBlog";
import BlogSection from "../componentes/secciones/BlogSection";
import GridNumber from "../componentes/GridNumber";
import RowNumber from "../componentes/RowNumber";
import BlogCard from "../componentes/BlogCard";
import PackageSection from "../componentes/secciones/PackageSection";
import PromocionSection from "../componentes/PromocionSection";
import TestimoniosSection from "../componentes/secciones/TestimoniosSection";
import { useTranslation } from "react-i18next";
import { useApi } from "../hooks/useApi";

const idiomaMap = { es: 1, en: 2, br: 3 }

const BlogDetail = () => {
    const { t } = useTranslation()
    const { slug } = useParams();

    const idiomaId = idiomaMap[t.language] || 1
    
    const { data, isLoading, isError, error } = useApi({ endpoint: 'blog-slug', method: 'POST', body: { idioma_id: idiomaId, slug: slug, }, });

    if (isLoading) return <p className="text-center py-10">Cargando layout...</p>;
    if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
    if (!data || !data.data) return null;

    const blogData = data.data.blog || [];
    return (
        <>
            <div>
                <HeroSectionMidle
                    backgroundImage={blogData.imagen}
                    title={blogData.titulo}
                    blogCategoria={blogData.categoriablog.nombre}
                    blogSlug={blogData.slug}

                />
                {/* <div className="w-full max-w-7xl mx-auto mt-24 mb-12">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-7 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle px-10">
                            <JisaTitleContentCyan contenido={blogData.introtitulo} className="font-bold text-2xl" />
                            <ParrafoContent className="text-JisaGris"
                                contenido={blogData.introText}
                            />
                        </div>
                        <div className="md:col-span-5 col-span-12 h-auto flex flex-col md:items-start items-center justify-center align-middle">
                            <div className="flex flex-col mx-auto">
                                <div className="w-52 h-full min-h-96 min-w-64 mx-auto">
                                    <img src={blogData.introImage} alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                                </div>
                                <div className="flex gap-x-4 text-JisaCyan justify-center p-4">
                                    <InstagramIcon size={30} className="" />
                                    <FacebookIcon size={30} className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="w-full max-w-7xl mx-auto mt-12 mb-12 px-12 flex flex-col">
                    {/* <div className="w-full h-full">
                        <img src={blogData.secondaryImage} alt="Jisa-Nosotros-Paquete" className="w-full h-full object-cover rounded-lg " />
                    </div> */}
                    <div className="w-full flex flex-col items-center justify-center py-6">
                        {/* <span className="text-JisaCyan font-bold text-2xl">{t("blogs_detail.las_noches_en_cusco")}</span> */}
                        <ParrafoContent
                            contenido={
                                blogData.contenido
                            }
                        />
                    </div>
                    <Swiper
                        breakpoints={{
                            320: { slidesPerView: 4, spaceBetween: 10 },
                            480: { slidesPerView: 4, spaceBetween: 15 },
                            640: { slidesPerView: 4, spaceBetween: 20 },
                            768: { slidesPerView: 4, spaceBetween: 10 },
                            1024: { slidesPerView: 4, spaceBetween: 10 },
                            1280: { slidesPerView: 4, spaceBetween: 10 },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop
                        navigation={false}
                        modules={[Autoplay]}
                        className="mySwiper w-full h-full mt-4"
                    >

                        {/* {blogData.gallery.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-48">
                                    <img
                                        src={image}
                                        alt={`Jisa-Nosotros-Paquete-${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))} */}
                    </Swiper>
                </div>
                {/* <div className="w-full max-w-7xl mx-auto mt-12 mb-12 px-12 flex flex-col">
                    <SeparatorBarHorizontal />
                    <JisaTitleContentCyan contenido={t("blogs_detail.disponibilidad_machupicchu")} className="text-2xl" />
                    <CalendarBlog />
                </div> */}


                <div className="w-full max-w-7xl mx-auto mt-12 mb-12 px-12 flex flex-col">
                    <SeparatorBarHorizontal />
                    <JisaTitleContentCyan contenido={t("blogs_detail.blogs_relacionados")} className="text-2xl" />
                    <div className="w-full max-w-6xl mx-auto md:px-0 px-4 pt-12">
                        <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                            {data.data?.blog.relacionados.map((blog,index) => (
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
                    </div>
                </div>
                <PackageSection data={data.data?.paquetes} tipo="0" />
                <PromocionSection />
                <TestimoniosSection id="testimonios" data={data.data?.tripadvisors} google={data.data?.googles} />
            </div>
        </>
    )
}

export default BlogDetail