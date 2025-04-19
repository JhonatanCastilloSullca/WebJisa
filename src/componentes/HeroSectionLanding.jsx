const HeroSectionLanding = ({
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0.75)",
  title,
  title2,
  description,
}) => {
  return (
    <div
      className="md:h-full h-auto bg-cover bg-center relative flex flex-col text-white text-center p-4 md:py-32 py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      ></div>

      <div className="relative  max-w-5xl w-full flex flex-col top-20 mx-auto h-screen">
        <div className="text-title pt-10">
          <h1
            className="text-JisaCyan text-8xl font-montserrat font-black uppercase w-min leading-[60px] text-start"
          >
            <span className="text-7xl">{title}</span><br /><span>{title2}</span>
          </h1>
        </div>
        <span
          className="bg-JisaGris px-1 py-0 tracking-[0.5em] text-white text-lg w-fit mt-4"
        >{description}</span>
      </div>
    </div>
  );
};

export default HeroSectionLanding;
