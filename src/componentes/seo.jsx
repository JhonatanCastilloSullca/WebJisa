import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const toAbsolute = (base, path) =>
  (base?.replace(/\/$/, "") || "") + (path?.startsWith("/") ? path : `/${path || ""}`);

export default function SEO({
  title = "Jisa Adventure",
  description = "Agencia de viajes y tours en Perú.",
  image = "/agencia-de-viaje-cusco-jisaadventure.webp",  // mejor si es URL absoluta
  type = "website",
  robots = "index,follow",
  locale = "es_PE",
  siteName = "Jisa Adventure",
  canonical = null,
  keywords = null,
  alternates = [],                     // [{ hrefLang:'en', href:'/en/...'}, ...] (opcional)
  jsonLd = null,                       // objeto JS para JSON-LD (opcional)
}) {
  const { pathname, search } = useLocation();
//   const canonical = toAbsolute(canonicalBase, pathname + search);
//   const ogImage = image?.startsWith("http") ? image : toAbsolute(canonicalBase, image || "/og-default.jpg");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {
        keywords && <meta name="keywords" content={keywords}></meta>
      }
      {
        canonical && <link rel="canonical" href={canonical} />
      }

      {/*  Open Graph
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      Twitter 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      hreflang opcional 
      {alternates?.map((alt) => (
        <link
          key={alt.hrefLang}
          rel="alternate"
          hrefLang={alt.hrefLang}
          href={alt.href.startsWith("http") ? alt.href : toAbsolute(canonicalBase, alt.href)}
        />
      ))}*/}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}