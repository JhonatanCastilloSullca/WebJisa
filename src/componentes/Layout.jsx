import { Outlet } from "react-router-dom"
import Header from "./secciones/Header"
import Footer from "./secciones/Footer"
import FloatingMenu from "./FloatingMenu"
import FloatingContact from "./FloatingContact"
import ScrollTop from "./ScrollTop"
<<<<<<< HEAD
function Layout({ dataGeneral }) {
    return (
        <>
            <Header dataGeneral={dataGeneral} />
=======
import { useApi } from "../hooks/useApi"

function Layout() {
    
    const { data, isLoading, isError, error } = useApi({ endpoint: 'general' });

    if (isLoading) return <p className="text-center py-10">Cargando layout...</p>;
    if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
    if (!data || !data.data) return null;

    return (
        <>
            <Header data={data.data} />
>>>>>>> 22bd3ae8e23818aa2358e958ddfe725aa56b99bc
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