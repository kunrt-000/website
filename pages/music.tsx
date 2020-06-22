import faSpotify from "@iconify/icons-fa-brands/spotify";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import Release from "../components/Release";
import Header from "../components/Header";
import Streaming from "../components/Streaming";
import bandcamp from "@iconify/icons-fa-brands/bandcamp";
import appleMusic from "@iconify/icons-fa-brands/itunes";

type MusicPageProps = {
  releases: ReleasePage[];
};

const Music = ({ releases }: MusicPageProps) => {
  let music_releases = releases.map((release) => {
    return {
      title: release.title,
      genre: release.genre.primary,
      year: release.year,
      type: release.type,
      id: release.id,
    };
  });

  let streaming_services: Streaming[] = [
    {
      name: "Spotify",
      icon: faSpotify,
      link: "https://open.spotify.com/artist/0oS1w3XT067ttzelzj67b6",
    },
    {
      name: "Bandcamp",
      icon: bandcamp,
      link: "https://amanharwara.bandcamp.com",
    },
    {
      name: "Apple Music",
      icon: appleMusic,
      link: "https://music.apple.com/us/artist/aman-harwara/1516521816",
    },
  ];

  return (
    <>
      <Head>
        <title>All Music Releases - Aman Harwara</title>
        <meta name="title" content={`All Music Releases - Aman Harwara`} />
        <meta
          name="description"
          content={`All of the music released by Aman Harwara, including albums, singles, EPs, etc.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://amanharwara.xyz/music`} />
        <meta
          property="og:title"
          content={`All Music Releases - Aman Harwara`}
        />
        <meta
          property="og:description"
          content={`All of the music released by Aman Harwara, including albums, singles, EPs, etc.`}
        />
        <meta
          property="twitter:url"
          content={`https://amanharwara.xyz/music`}
        />
        <meta
          property="twitter:title"
          content={`All Music Releases - Aman Harwara`}
        />
        <meta
          property="twitter:description"
          content={`All of the music released by Aman Harwara, including albums, singles, EPs, etc.`}
        />
      </Head>
      <div className="main-container">
        <Header
          back_link="/"
          title="All Music Releases"
          show_title={false}
          menu={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Work",
              link: "/work",
            },
            {
              name: "Music",
              link: "/music",
              active: true,
            },
            {
              name: "Blog",
              link: "/blog",
            },
          ]}
        />
        <div className="releases">
          {music_releases.length !== 0 &&
            music_releases.map((release) => (
              <a
                href={`/music/${release.id}`}
                className="release-link"
                title={release.title}
                key={release.id}
              >
                <Release
                  title={release.title}
                  genre={release.genre}
                  year={release.year}
                  type={release.type}
                  id={release.id}
                  key={release.id}
                />
              </a>
            ))}
        </div>
        <div className="streaming-links">
          <h2 className="title">You can find my music on:</h2>
          <ul className="links">
            {streaming_services.map((service) => (
              <li key={service.name}>
                <Streaming
                  link={service.link}
                  name={service.name}
                  icon={service.icon}
                />
              </li>
            ))}
            <li key="and-more">and more...</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let releases = [];

  let release_files = fs.readdirSync(path.join(process.cwd(), "data", "music"));

  release_files.forEach((release_filename) => {
    let filepath = path.join(process.cwd(), "data", "music", release_filename);

    let release = JSON.parse(fs.readFileSync(filepath, "utf-8").toString());

    release.id = release_filename.replace(".json", "");

    releases.push(release);
  });

  return {
    props: {
      releases,
    },
  };
};

export default Music;
