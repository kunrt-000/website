import Head from "next/head";
import HeroSection from "@/components/index/HeroSection";
import LatestMusicRelease from "@/components/index/LatestMusicRelease";
import WorkSection from "@/components/index/WorkSection";

export default function Home() {
  return (
    <div id="index-page">
      <Head>
        <title>Aman Harwara</title>
        <meta name="title" content="Aman Harwara" />
        <meta
          name="description"
          content="Aman Harwara is a multi-faceted programmer, web designer, musician and writer."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amanharwara.com" />
        <meta property="og:title" content="Aman Harwara" />
        <meta
          property="og:description"
          content="Aman Harwara is a multi-faceted programmer, web designer, musician and writer."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://amanharwara.com" />
        <meta property="twitter:title" content="Aman Harwara" />
        <meta
          property="twitter:description"
          content="Aman Harwara is a multi-faceted programmer, web designer, musician and writer."
        />
        <meta property="twitter:image" content="" />
      </Head>
      <HeroSection />
      <WorkSection />
      <LatestMusicRelease />
    </div>
  );
}
