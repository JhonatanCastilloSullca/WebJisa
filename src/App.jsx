import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './componentes/Layout'
import Home from './pages/Home'
import Tours from './pages/Tours'
import TourDetail from './pages/TourDetail'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Paquetes from './pages/Paquetes'
import PaqueteDetail from './pages/PaqueteDetail'
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound'
import TerminosCondiciones from './pages/TerminosCondiciones'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import Cart from './pages/Cart'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import { useApi } from './hooks/useApi'
import { useEffect } from 'react'
import LandingDetail from './pages/LandingDetail'
import { useTranslation } from 'react-i18next'
import DestinosDetail from './pages/DestinosDetail'
import { CartProvider } from './contexts/CartContext'
const idiomaMap = { es: 1, en: 2, br: 3 }

function App() {

  const { i18n } = useTranslation()
  const idiomaId = idiomaMap[i18n.language] || 1

  const { data, isLoading, isError, error } = useApi({ endpoint: 'general', method: 'POST', idiomaId, });

  if (isLoading) return <p className="text-center py-10">Cargando layout...</p>;
  if (isError) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
  if (!data || !data.data) return null;
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout dataGeneral={data.data} />}>
            <Route index element={<Home dataGeneral={data.data} />} />
            <Route path="tours" element={<Tours />} />
            <Route path="tours/:slug" element={<TourDetail />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<BlogDetail />} />
            <Route path="paquetes" element={<Paquetes />} />
            <Route path="paquetes/:slug" element={<PaqueteDetail />} />
            <Route path="destinos/:slug" element={<DestinosDetail />} />
            <Route path="landing/:slug" element={<LandingDetail />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="terminos-condiciones" element={<TerminosCondiciones />} />
            <Route path="politicas-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="carrito" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
