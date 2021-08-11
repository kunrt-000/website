import Img from "react-optimized-image";

const AArch64 = () => (
  <section className="container mx-auto px-6 md:px-16 py-8 md:py-12">
    <section className="flex flex-col lg:flex-row md:items-center mb-8">
      <div className="block w-full mb-8 lg:mb-0 md:mr-6 2xl:mr-8">
        <h1 className="font-semibold">About AArch64</h1>
        <p className="mb-4 leading-normal">
          AArch64.com is a blog run by experts at Fosshost about the challenges
          of planning, coordinating and managing 50u of Arm hardware in
          multiple, global locations.
        </p>
        <p className="mb-4 leading-normal">
          It is completely built with Next.js + Typescript using a flat-file
          approach and being mostly self-contained without using too many other
          dependencies.
        </p>
        <p className="mb-4 leading-normal">
          For the design, I went with a modern and clean look while remembering
          to maintain familiarity and good UX. A healthy amount of white space
          is used to give the design some room to breath and to keep the
          user&apos;s information overload to the minimal.
        </p>
      </div>
      <div className="block w-full md:ml-6 2xl:ml-8">
        <Img
          webp
          src={require(`../public/img/aarch64/thumb.png`)}
          alt="AArch64 Blog homepage"
        />
      </div>
    </section>
  </section>
);

export default AArch64;
