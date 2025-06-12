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
import LandingDetail from './pages/LandingDetail'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tours" element={<Tours />} />
          <Route path="tours/:slug" element={<TourDetail />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogDetail />} />
          <Route path="paquetes" element={<Paquetes />} />
          <Route path="paquetes/:slug" element={<PaqueteDetail />} />
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
  )
}

export default App
