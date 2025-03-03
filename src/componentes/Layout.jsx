import { Outlet } from "react-router-dom"
import Header from "./secciones/Header"
import Footer from "./secciones/Footer"
function Layout() {
    return (
        <>
            <Header />
            <main className="min-h-screen relative">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout