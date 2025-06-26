
import FacebookIcon from "../../assets/icons/FacebookIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon"
import InstagramIcon from "../../assets/icons/InstagramIcon"
import TripAdvisorIcon from "../../assets/icons/TripAdvisorIcon"
import TikTokIcon from "../../assets/icons/TikTokIcon"
import logoJisa from "../../assets/imagen/LogoJisaSecundario.webp"
import FooterJisa from "../../assets/imagen/Footer-Jisa-Adventure-Caminante.webp"
import IconText from "../layout/IconText";
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import MapDotIcon from "../../assets/icons/MapDotIcon";
import ClockIcon from "../../assets/icons/ClockIcon";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Footer() {
  const { t } = useTranslation()
  return (
    <>
      <div className="w-full">
        <img src={FooterJisa} alt="" className="-mb-2 w-full" />
      </div>
      <div className="bg-black w-full z-40 relative">
        <div className="w-full max-w-7xl grid grid-cols-12 gap-4 mx-auto ">
          <div className="md:col-span-4 col-span-12 p-4 text-white flex flex-col px-8">
            <img src={logoJisa} alt="Logo Jisa" className="h-32 object-contain py-2" />
            <div>
              <p className="text-sm p-4 pt-2 md:text-left text-center">
                {t("footer.text")}
              </p>
            </div>
            <div className="text-white flex justify-center align-middle items-center gap-x-4">
              <GoogleIcon size={40} className="" />
              <TripAdvisorIcon size={40} className="" />
              <InstagramIcon size={30} className="" />
              <FacebookIcon size={30} className="" />
              <TikTokIcon size={30} className="" />
            </div>
          </div>
          <div className="md:col-span-4 col-span-12 p-4 text-white px-12">
            <h4 className="font-bold text-xl md:text-left text-center">Jisa Adventure</h4>
            <div className="lista-menu-footer ps-4 py-2 md:">
              <ul className="text-base font-normal text-center">
                {/* <li>
                  <a href="#">{t("footer.inicio")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.destinos")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.tours")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.paquetes_personalizados")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.nuestro_blog")}</a> 
                </li>
                <li>
                  <NavLink to={'/nosotros'}>{t("footer.sobre_nosotros")}</NavLink>
                </li>
                <li>
                  <NavLink to={'/politicas-privacidad'}>{t("footer.politicas_reserva")}</NavLink>
                </li>
                <li>
                  <NavLink to={'/terminos-condiciones'}>{t("footer.terminos_condiciones")}</NavLink>
                </li>
                <li>
                  <NavLink to={'/preguntas-frecuentes'}>{t("footer.faq")}</NavLink>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12  p-4 text-white px-12">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h4 className="font-semibold text-base">{t("footer.asesor_venta")}</h4>
                <IconText icon={EnvelopeIcon} text="info@jisaadventure.com" />
                <IconText icon={PhoneIcon} text="926 561 020" />
              </div>
              <div className="flex flex-col gap-y-2">
                <h4 className="font-semibold text-base">{t("footer.datos_informacion")}</h4>
                <IconText icon={MapDotIcon} text="Calle Garcilaso, 265  Cusco, Perú" />
                <IconText icon={ClockIcon} text="08:00a.m - 8:00p.m" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl text-center gap-4 mx-auto ">
          <span className="text-JisaCyan">
            © {new Date().getFullYear()} Jisa Adventure – Todos los derechos reservados
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer