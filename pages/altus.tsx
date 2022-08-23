import styles from "@/styles/altus/Altus.module.scss";
import Head from "next/head";
import Hero from "@/components/altus/Hero";
import Features from "@/components/altus/Features";
import Support from "@/components/altus/Support";
import Downloads from "@/components/altus/Downloads";
import { GetServerSideProps } from "next";
import { AltusDownloadsProps } from "types/altus";

const Altus = ({ downloadProps }: { downloadProps: AltusDownloadsProps }) => (
  <div id="altus-page" className={styles.page}>
    <Head>
      <title>Altus — Feature-rich desktop WhatsApp client</title>
      <meta
        name="title"
        content="Altus — Feature-rich desktop WhatsApp client"
      />
      <meta
        name="description"
        content="Altus is a cross-platform desktop WhatsApp client with themes, multiple account support and much more!"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://amanharwara.com/altus" />
      <meta
        property="og:title"
        content="Altus — Feature-rich desktop WhatsApp client"
      />
      <meta
        property="og:description"
        content="Altus is a cross-platform desktop WhatsApp client with themes, multiple account support and much more!"
      />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://amanharwara.com/altus" />
      <meta
        property="twitter:title"
        content="Altus — Feature-rich desktop WhatsApp client"
      />
      <meta
        property="twitter:description"
        content="Altus is a cross-platform desktop WhatsApp client with themes, multiple account support and much more!"
      />
      <meta property="twitter:image" content="" />

      <link rel="shortcut icon" href="/icons/altus/favicon.ico" />
    </Head>
    <Hero />
    <Features />
    <Support />
    <Downloads version={downloadProps.version} links={downloadProps.links} />
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://api.github.com/repos/amanharwara/altus/releases/latest",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  const data = await res.json();

  const version = data && data.tag_name ? `v${data.tag_name}` : "latest";
  const windows =
    data && data.assets
      ? data.assets.find((asset: any) =>
          asset.browser_download_url.includes("exe")
        ).browser_download_url
      : "https://github.com/amanharwara/altus/releases/latest";
  const linux =
    data && data.assets
      ? data.assets.find((asset: any) =>
          asset.browser_download_url.includes("AppImage")
        ).browser_download_url
      : "https://github.com/amanharwara/altus/releases/latest";
  const macOSarm =
    data && data.assets
      ? data.assets.find(
          (asset: any) =>
            asset.browser_download_url.includes("dmg") &&
            asset.browser_download_url.includes("arm64")
        ).browser_download_url
      : "https://github.com/amanharwara/altus/releases/latest";
  const macOSintel =
    data && data.assets
      ? data.assets.find(
          (asset: any) =>
            asset.browser_download_url.includes("dmg") &&
            !asset.browser_download_url.includes("arm64")
        ).browser_download_url
      : "https://github.com/amanharwara/altus/releases/latest";

  const downloadProps: AltusDownloadsProps = {
    version,
    links: {
      windows,
      linux,
      macOSarm,
      macOSintel,
    },
  };

  return {
    props: {
      downloadProps,
    },
  };
};

export default Altus;
