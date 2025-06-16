import { useTranslation } from "react-i18next"
import GridNumber from "../GridNumber"
import HeaderTitle from "../layout/HeaderTitle"
import SubHeaderTitle from "../layout/SubHeaderTitle"
import RowNumber from "../RowNumber"
import SeparatorBarHorizontal from "../SeparatorBarHorizontal"
import ToursCard from "../ToursCard"

const PackageSection = ({ id }) => {
    const { t } = useTranslation()
    return (
        <div id={id} className="w-full max-w-7xl mx-auto md:my-24 my-12 pb-24 mb-12 ">
            <div className="flex-col justify-center flex items-center py-10">
                <HeaderTitle title={t('paquetes_destacados.title')} />
                <SubHeaderTitle title={t('paquetes_destacados.description')} />
                <SeparatorBarHorizontal />
            </div>
            <div className="w-full max-w-6xl mx-auto md:px-0 px-4">
                <GridNumber col={12} className="md:gap-x-11 gap-x-0">
                    <RowNumber col={4}>
                        <ToursCard
                            title="Grupal"
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                            location="Montaña de Colores Palccoyo, Cusco"
                            description="Rainbow Mountain Vinicunca Tour (Group Service)"
                            price="$999.00"
                            dias="7"
                            group={'Min 4'}
                        />
                    </RowNumber>
                    <RowNumber col={4}>
                        <ToursCard
                            title="Grupal"
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                            location="Montaña de Colores Palccoyo, Cusco"
                            description="Rainbow Mountain Vinicunca Tour (Group Service)"
                            price="$999.00"
                            dias="7"
                            group={'Min 4'}
                        />
                    </RowNumber>
                    <RowNumber col={4}>
                        <ToursCard
                            title="Grupal"
                            image="https://jisaadventure.com/wp-content/uploads/2024/02/agencia-de-viaje-cusco-jisaadventure.webp"
                            location="Montaña de Colores Palccoyo, Cusco"
                            description="Rainbow Mountain Vinicunca Tour (Group Service)"
                            price="$999.00"
                            dias="7"
                            group={'Min 4'}
                        />
                    </RowNumber>
                </GridNumber>
            </div>
        </div>
    )
}

export default PackageSection