// src/utils/seoSchemas.js

// asegura URL absoluta
const toAbs = (origin, path = "") =>
  (origin?.replace(/\/$/, "") || "") + (path?.startsWith("/") ? path : `/${path}`);

const sanitizeImage = (img) => {
  if (!img) return undefined;
  // quita prefijos tipo "url "
  return String(img).replace(/^url\s+/i, "").trim();
};

export function buildTouristTripFromTour(tour, {
  baseUrl = "https://jisaadventure.com",
  reservaBase = "/tour",          // ruta base para la reserva
  defaultCurrency = "USD",
  reviews = 550
} = {}) {
  if (!tour) return null;

  // Imagen principal (absoluta)
  const imageAbs = tour.foto_banner?.startsWith("http")
    ? sanitizeImage(tour.foto_banner)
    : toAbs(baseUrl, sanitizeImage(tour.foto_banner || "/agencia-de-viaje-cusco-jisaadventure.webp"));

  // URL canónica del tour
  const tourUrl = tour.canonical || toAbs(baseUrl, `/tours/${tour.slug}`);

  // Destinos (desde tour.ubicaciones). Acepta strings o objetos.
  const destinations = Array.isArray(tour.ubicaciones) ? tour.ubicaciones
    .map((u) => {
      if (!u) return null;
      if (typeof u === "string") {
        return {
          "@type": "Place",
          name: u,
          // si no tienes granularidad, al menos el country
          address: { "@type": "PostalAddress", addressCountry: "PE" }
        };
      }
      // si viene como objeto { nombre, localidad, region, countryCode }
      return {
        "@type": "Place",
        name: u.nombre,
        address: {
          "@type": "PostalAddress",
          addressLocality: u.nombre,
          addressRegion: u.nombre || "Cusco",
          addressCountry: u.countryCode || "PE",
        }
      };
    })
    // quita nulos y duplicados por nombre
    .filter(Boolean)
    .filter((v, i, arr) => v.name && arr.findIndex(x => x.name === v.name) === i)
  : [];

  // Itinerario (desde tour.itinerarios)
  const itinerary = Array.isArray(tour.itinerarios)
    ? tour.itinerarios.map((it) => ({
        "@type": "ItemList",
        name: it.titulo || it.name || `Día`,
        ...(it.titulo ? { description: String(it.titulo).slice(0, 300) } : {}),
      }))
    : [];

  // Oferta / precio
  const price = (tour.precio)?.toString();
  const priceCurrency = "USD";
  const offerUrl = toAbs(baseUrl, `${reservaBase}/${tour.slug}`);

  // Rating (si tienes promedio y conteo; si no, lo omitimos)
  const ratingValue = 5;
  const reviewCount = reviews;

  // keywords opcionales (si ya las guardas en tour.keywords)
  const keywords = tour.keywords || null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.h1,
    "description": tour.description,
    "image": [
      imageAbs,
    ],
    ...(itinerary.length ? { itinerary } : {}),
    "provider": {
      "@type": "Organization",
      "name": "Jisa Adventure",
      "url": baseUrl,
      "logo": "https://sistema.jisaadventure.com/storage/header/logo-1.webp",
      "sameAs": [
        "https://www.instagram.com/jisa_adventure/",
        "https://www.youtube.com/channel/UCsLfbdfqeKGvbxBvuTr7jVw",
        "https://www.facebook.com/Jisadventuress/",
        "https://www.tiktok.com/@jisa_adventure",
        "https://www.tripadvisor.com.pe/Attraction_Review-g294318-d17545647-Reviews-JISA_ADVENTURE_Agencia_de_viajes_para_Cusco-Machu_Picchu_Sacred_Valley_Cusco_Reg.html"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "‪+51-976-294-449‬",
        "contactType": "customer service",
        "areaServed": "PE",
        "availableLanguage": ["Spanish", "English"]
      }
    },
    ...(price ? {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": priceCurrency,
        "availability": "https://schema.org/InStock",
        "url": offerUrl,
      }
    } : {}),
  };

  return schema;
}