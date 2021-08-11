import Img from "react-optimized-image";

const Chartr = () => (
  <section className="container mx-auto px-6 md:px-16 py-8 md:py-12">
    <section className="flex flex-col lg:flex-row md:items-center mb-8">
      <div className="block w-full mb-8 lg:mb-0 md:mr-6 2xl:mr-8">
        <h1 className="font-semibold">About Chartr</h1>
        <p className="mb-4 leading-normal">
          Chartr is a web-app that allows users to create their own music charts
          and collages, with support for using Spotify &amp; Last.fm statistics.
        </p>
        <p className="mb-4 leading-normal">
          It was inspired by Topsters 2 and started off as an open-source
          alternative for it. And over time, I&apos;ve added extra features like
          the ability to use Spotify &amp; Last.fm stats to create charts.
        </p>
        <p className="mb-4 leading-normal">
          Chartr uses Svelte along with Typescript as the frontend framework of
          choice. It can easily be deployed on Vercel using a simple one-click
          deploy button on the repository.
        </p>
      </div>
      <div className="block w-full md:ml-6 2xl:ml-8">
        <Img
          webp
          src={require(`../public/img/chartr/thumb.png`)}
          alt="Spotify chart on Chartr"
        />
      </div>
    </section>
  </section>
);

export default Chartr;
