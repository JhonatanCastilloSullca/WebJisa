import { Outlet } from "react-router-dom"
import Header from "./secciones/Header"
import Footer from "./secciones/Footer"
import FloatingMenu from "./FloatingMenu"
import FloatingContact from "./FloatingContact"
import ScrollTop from "./ScrollTop"
function Layout({ dataGeneral }) {
    return (
        <>
            <Header dataGeneral={dataGeneral} />
            <ScrollTop />
            <FloatingContact />
            <main className="min-h-screen relative">
                <Outlet context={{ dataGeneral }}/>
            </main>
            <Footer context={{ dataGeneral }} />
        </>
    )
}

export default Layout