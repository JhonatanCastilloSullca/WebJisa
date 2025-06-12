import { Outlet } from "react-router-dom"
import Header from "./secciones/Header"
import Footer from "./secciones/Footer"
import FloatingMenu from "./FloatingMenu"
import FloatingContact from "./FloatingContact"
import ScrollTop from "./ScrollTop"
import { useApi } from "../hooks/useApi"

function Layout() {
    
    const { data, isLoading, isError, error } = useApi({ endpoint: 'general' });

    if (isLoading) return <p className="text-center py-10">Cargando layout...</p>;
    if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
    if (!data || !data.data) return null;

    return (
        <>
            <Header data={data.data} />
            <ScrollTop />
            <FloatingContact />
            <main className="min-h-screen relative">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout