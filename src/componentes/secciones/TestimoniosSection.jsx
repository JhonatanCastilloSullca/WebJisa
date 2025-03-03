import { useState } from 'react'
import HeaderTitle from '../layout/HeaderTitle'
import SubHeaderTitle from '../layout/SubHeaderTitle'
import SeparatorBarHorizontal from '../SeparatorBarHorizontal'
import TabButton from '../TabButton'
import Testimonios from '../Testimonios'
import TripAdvisorIcon from '../../assets/icons/TripAdvisorIcon'
import GoogleIcon from '../../assets/icons/GoogleIcon'

const TestimoniosSection = ({ id }) => {
    const [activeTab, setActiveTab] = useState("tripadvisor");

    const tabs = [
        { id: "tripadvisor", label: "Tripadvisor", icon: TripAdvisorIcon, activeColor: "bg-JisaCyan" },
        { id: "google", label: "Google", icon: GoogleIcon, activeColor: "bg-[#eb4939]" },
    ];

    return (
        <div id={id} className="w-full max-w-7xl mx-auto my-24  mb-12 ">
            <div className="flex-col justify-center flex items-center py-10">
                <HeaderTitle title={'Reseñas de Nuestros Clientes'} />
                <SubHeaderTitle title={`Descubre las historias y testimonios de aquellos que han viajado con Jisa Adventure y han experimentado momentos inolvidables en los hermosos destinos de Perú.`} />
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
                    {activeTab === "tripadvisor" ? <Testimonios marca={'Tripadvisor'} /> : <Testimonios marca={'Google'} />}
                </div>
            </div>
        </div>
    )
}

export default TestimoniosSection