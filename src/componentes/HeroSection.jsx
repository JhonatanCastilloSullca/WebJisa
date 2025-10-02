import SearchBar from "./SearchBar";

const HeroSection = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
  dataSearch,
  // altura fija para que el slide no colapse
  heightClass = "h-[70svh] md:h-[86vh] lg:h-[92vh] xl:h-[92vh]",
  children,
}) => {
  return (
    <section className={`relative w-full ${heightClass} overflow-visible`}>
      {/* Fondo + overlay en una sola capa */}
        <div
            className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center will-change-transform"
            style={{
                backgroundImage: `
                linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.35), rgba(0,0,0,0)),
                url(${backgroundImage})
                `,
            }}
        />

        {/* Contenido centrado */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center">
            {title && (
            <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight uppercase drop-shadow">
                {title}
            </h1>
            )}
            {description && (
            <p className="mt-3 text-white/90 md:text-lg max-w-3xl">
                {description}
            </p>
            )}
            {/* {buttonText && buttonLink && (
            <a
                href={buttonLink}
                className="mt-5 inline-block rounded-xl bg-white text-gray-900 font-semibold px-5 py-2 shadow hover:opacity-90"
            >
                {buttonText}
            </a>
            )} */}
        </div>
    </section>
  );
};

export default HeroSection;
