import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Track from "../../components/Track";
import { Icon } from "@iconify/react";
import bxlSpotify from "@iconify/icons-bx/bxl-spotify";
import bxlApple from "@iconify/icons-bx/bxl-apple";
import arrowLeft from "@iconify/icons-feather/arrow-left";
import Head from "next/head";

type ReleasePageProps = {
  release: string;
  current: ReleasePage;
};

const Release = ({ release, current }: ReleasePageProps) => {
  const router = useRouter();
  let coverSizes = require(`../../public/music/images/${release}.jpg?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`);
  return (
    <>
      <Head>
        <title>{current.title} - Aman Harwara</title>
        <meta name="title" content={`${current.title} - Aman Harwara`} />
        <meta name="description" content={`${current.description}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://amanharwara.xyz/music/${release}`}
        />
        <meta property="og:title" content={`${current.title} - Aman Harwara`} />
        <meta property="og:description" content={`${current.description}`} />
        <meta property="og:image" content={`/music/images/${release}.jpg`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://amanharwara.xyz/music/${release}`}
        />
        <meta
          property="twitter:title"
          content={`${current.title} - Aman Harwara`}
        />
        <meta
          property="twitter:description"
          content={`${current.description}`}
        />
        <meta
          property="twitter:image"
          content={`/music/images/${release}.jpg`}
        />
      </Head>
      <a className="skip-link" href="#tracklist">
        Go To Tracklist
      </a>
      <a className="skip-link" href="#release-links">
        Go To Links
      </a>
      <div className="release-container">
        <div className="watermark"></div>
        <main className="left-column">
          <a href="/music" className="back-link button icon">
            <Icon icon={arrowLeft} />
          </a>
          <h1 className="title">{current.title}</h1>
          <div className="info">
            <span className="genre">
              {current.genre.primary} / {current.genre.secondary}
            </span>
            <span className="separator">·</span>
            <span className="year">{current.year}</span>
            <span className="separator">·</span>
            <span className="type">{current.type}</span>
          </div>
          <div className="description">{current.description}</div>
          <div className="tracklist-container">
            <h3 className="title">Tracklist:</h3>
            <ul className="tracklist" id="tracklist">
              {(current.tracklist.length === 0 || !current.tracklist) && (
                <div>No Tracks</div>
              )}
              {current.tracklist &&
                current.tracklist.length !== 0 &&
                current.tracklist.map((track) => (
                  <li key={track.number}>
                    <Track
                      number={track.number}
                      title={track.title}
                      links={track.links}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </main>
        <aside className="right-column">
          <a href="/music" className="back-link button icon">
            <Icon icon={arrowLeft} />
          </a>
          <div
            className="cover"
            style={{
              backgroundColor: require(`../../public/music/images/${release}.jpg?lqip-colors`)[0],
            }}
          >
            <img
              srcSet={coverSizes.srcSet}
              src={coverSizes.src}
              alt={`${current.title} Cover Art`}
            />
          </div>
          <div className="links" id="release-links">
            <a
              href={current.links.download}
              target="_blank"
              rel="noopener noreferrer"
              className="button download"
              title="Download from Bandcamp"
              id="download-release"
            >
              Download
            </a>
            <a
              href={current.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="button icon spotify"
              title="Listen on Spotify"
              id="spotify-release"
            >
              <Icon icon={bxlSpotify} />
            </a>
            <a
              href={current.links.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="button icon apple-music"
              title="Listen on Apple Music"
              id="apple-release"
            >
              <Icon icon={bxlApple} />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let { release } = context.params;

  let current: ReleasePage = JSON.parse(
    fs
      .readFileSync(
        path.join(path.join(process.cwd(), "data"), "music", `${release}.json`)
      )
      .toString()
  );

  return {
    props: { release, current },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let releases = fs.readdirSync(path.join(process.cwd(), "data", "music"));

  let paths = [];

  releases.forEach((release) => {
    paths.push({ params: { release: release.replace(".json", "") } });
  });

  return {
    paths,
    fallback: false,
  };
};

export default Release;
