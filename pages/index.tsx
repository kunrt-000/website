/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import Head from "next/head";
import HeroSection from "@/portfolio/HeroSection";
import AboutSection from "@/portfolio/AboutSection";
import WorkSection from "@/portfolio/WorkSection.jsx";
import ContactSection from "@/portfolio/ContactSection";
import Footer from "@/portfolio/Footer";

export default function Home() {
  return (
    <div
      css={css`
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        height: 100vh;
        scroll-behavior: smooth;
      `}
    >
      <Global
        styles={css`
          @font-face {
            font-family: "Inter";
            font-style: normal;
            font-weight: 100 800;
            font-display: swap;
            src: url("../fonts/Inter.var.woff2") format("woff2"),
            url("../fonts/Inter.ttf") format("truetype");
          }

          *:focus {
            outline: 3px solid #667ceed6 !important;
          }

          html,
          body {
            width: 100%;
            font-family: "Inter", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            background: #fff;
            margin: 0;
            padding: 0;
          }

          body,
          #__next {
            overflow: hidden;
          }
        `}
      />
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
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
