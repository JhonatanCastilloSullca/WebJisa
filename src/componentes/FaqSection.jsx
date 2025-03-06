import React from 'react'
import SeparatorBarHorizontalVerde from './SeparatorBarHorizontalVerde'
import JisaTitleContentGris from './layout/JisaTitleContentGris'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import ParrafoContent from './layout/ParrafoContent'

const FaqSection = ({ faqs }) => {
    return (
        <div>
            <SeparatorBarHorizontalVerde />
            <JisaTitleContentGris contenido={'Preguntas antes de viajar'} className="text-2xl" />
            {faqs.map((faq, index) => (
                <Disclosure as="div" key={index} className="px-4 py-2 text-JisaCyan border-2 rounded-md my-4">
                    <DisclosureButton className="group flex w-full items-center justify-center">
                        <div className="flex gap-x-4 align-middle items-center">
                            <span className="text-3xl font-semibold">{faq.titulo}</span>
                        </div>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5">
                        <ParrafoContent contenido={faq.descripcion} />
                    </DisclosurePanel>
                </Disclosure>
            ))}
        </div>
    )
}

export default FaqSection