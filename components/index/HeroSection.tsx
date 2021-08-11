import Img from "react-optimized-image";
import Button from "../Button";
import ArrowRight from "../icons/ArrowRight";

const HeroSection = () => (
  <section className="container mx-auto flex md:flex-row md:items-center md:justify-between px-6 md:px-16 py-8 md:py-12">
    <div className="lg:w-1/2">
      <div className="text-lg text-gray-200">Hi! I&apos;m Aman Harwara,</div>
      <h1 className="font-medium text-4xl md:text-5xl tracking-snug leading-tight md:leading-snug my-4 md:mt-3 md:my-6">
        A multi-faceted programmer &amp; musician
      </h1>
      <p className="text-lg text-gray-200 leading-normal mb-5">
        I create beautiful &amp; perfomant websites, make ambient music and
        write articles &amp; essays about a variety of topics.
      </p>
      <Button href="/#contact">
        <span>Contact Me</span>
        <ArrowRight className="text-white stroke-current ml-4" />
      </Button>
    </div>
    <div className="hidden lg:block w-1/2 h-64 relative">
      <div
        className="absolute 
      w-48 h-48 
      top-[-20%] left-[5%] 
      lg:top-[-10%] lg:left-[10%]
      2xl:top-[-5%] 2xl:left-[20%]
      flex items-center justify-center 
      bg-secondary"
      >
        <div className="w-1/2">
          <Img
            src={require(`../../public/icons/chartr/chartr.svg`)}
            alt="Chartr logo"
          />
        </div>
      </div>
      <div
        className="absolute 
      w-48 
      top-1/2 left-1/2 
      transform -translate-x-1/2 -translate-y-1/2"
      >
        <Img
          webp
          src={require(`../../public/img/music/moodbender.png`)}
          alt="Moodbender cover"
          sizes={[500, 1000, 2000]}
          breakpoints={[768, 1366]}
        />
      </div>
      <div
        className="absolute 
      w-48 h-48 
      bottom-[-20%] right-0 
      lg:bottom-[-10%] lg:right-[10%] 
      2xl:bottom-[-5%] 2xl:right-[15%] 
      flex items-center justify-center 
      bg-secondary"
      >
        <div className="w-1/2">
          <Img
            src={require(`../../public/icons/altus/altus.svg`)}
            alt="Altus logo"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
