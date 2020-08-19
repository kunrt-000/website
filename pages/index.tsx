import Head from "next/head";
import HeroSection from "@/portfolio/HeroSection";
import AboutSection from "@/portfolio/AboutSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aman Harwara</title>
        <meta name="title" content={`Aman Harwara`} />
        <meta
          name="description"
          content={`Aman Harwara is a programmer, designer and a musician.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://amanharwara.xyz/`} />
        <meta property="og:title" content={`Aman Harwara`} />
        <meta
          property="og:description"
          content={`Aman Harwara is a programmer, designer and a musician.`}
        />
        <meta property="twitter:url" content={`https://amanharwara.xyz/`} />
        <meta property="twitter:title" content={`Aman Harwara`} />
        <meta
          property="twitter:description"
          content={`Aman Harwara is a programmer, designer and a musician.`}
        />
      </Head>
      <HeroSection />
      <AboutSection />
    </>
  );
}
