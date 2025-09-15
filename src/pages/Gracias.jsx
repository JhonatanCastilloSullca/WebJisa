import HeroSectionMidle from "../componentes/HeroSectionMidle"

const Gracias = () => {
  return (
    <>
      <HeroSectionMidle
        backgroundImage='/agencia-de-viaje-cusco-jisaadventure.webp'
        title="GRACIAS POR SU COMPRA"
        description={``}
        buttonText="Ver Tours"
        buttonLink="https://jisaadventure.com/"
      />

      <div className="w-full max-w-7xl mx-auto mt-24 mb-12 px-4 md:px-0">
        <article className="prose prose-sm md:prose lg:prose-lg max-w-none">
          <h2 className="text-center">Jisa Adventure!</h2>
        </article>
      </div>
    </>
  )
}

export default Gracias
