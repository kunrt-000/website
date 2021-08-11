import Img from "react-optimized-image";

const Altus = () => (
  <section className="container mx-auto px-6 md:px-16 py-4">
    <section className="flex flex-col lg:flex-row md:items-center mb-8">
      <div className="block w-full mb-8 lg:mb-0 md:mr-6 2xl:mr-8">
        <h1 className="font-semibold">About Altus</h1>
        <p className="mb-4 leading-normal">
          Altus is a free, open-source desktop client for WhatsApp with built-in
          themes and multiple account support, available for Windows, Mac &amp;
          Linux.
        </p>
        <p className="mb-4 leading-normal">
          It uses the Electron framework along Svelte for the frontend and
          Typescript to create a wrapper around WhatsApp Web which allows for
          features like custom themes and a utility bar for quick message
          formatting.
        </p>
        <p className="mb-4 leading-normal">
          Altus is still regularly maintained, with over 39,000 downloads as of
          writing.
        </p>
      </div>
      <div className="block w-full md:ml-6 2xl:ml-8">
        <Img
          webp
          src={require(`../public/img/altus/thumb.png`)}
          alt="Altus with default theme"
        />
      </div>
    </section>
  </section>
);

export default Altus;
