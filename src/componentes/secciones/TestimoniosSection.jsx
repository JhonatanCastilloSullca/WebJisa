import { useState } from 'react'
import HeaderTitle from '../layout/HeaderTitle'
import SubHeaderTitle from '../layout/SubHeaderTitle'
import SeparatorBarHorizontal from '../SeparatorBarHorizontal'
import TabButton from '../TabButton'
import Testimonios from '../Testimonios'
import TripAdvisorIcon from '../../assets/icons/TripAdvisorIcon'
import GoogleIcon from '../../assets/icons/GoogleIcon'
import { useTranslation } from 'react-i18next'

const TestimoniosSection = ({ id, data, google }) => {
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState("tripadvisor");

    const tabs = [
        { id: "tripadvisor", label: "Tripadvisor", icon: TripAdvisorIcon, activeColor: "bg-JisaCyan" },
        { id: "google", label: "Google", icon: GoogleIcon, activeColor: "bg-[#eb4939]" },
    ];

    return (
        <div id={id} className="w-full max-w-7xl mx-auto ">
            <div className="flex-col justify-center flex items-center py-10">
                <HeaderTitle title={t("trip_section.titulo")} etiqueta="h2"/>
                <SubHeaderTitle title={t("trip_section.subtitulo")} />
                <SeparatorBarHorizontal />
            </div>

            <div>
                <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-JisaGris/50">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="me-2">
                            <TabButton
                                {...tab}
                                isActive={activeTab === tab.id}
                                onClick={setActiveTab}
                            />
                        </li>
                    ))}
                </ul>

                <div className="mt-4">
                    {activeTab === "tripadvisor" ? <Testimonios marca={'Tripadvisor'} data={data}  /> : <Testimonios marca={'Google'} data={google}  />}
                </div>
            </div>
        </div>
    )
}

export default TestimoniosSection