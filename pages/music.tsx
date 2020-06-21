import { Icon } from "@iconify/react";
import arrowLeft from "@iconify/icons-feather/arrow-left";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import Release from "../components/Release";
import Header from "../components/Header";

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
        <Header back_link="/" title="Music Releases" />
        <div className="releases">
          {music_releases.length !== 0 &&
            music_releases.map((release) => (
              <a
                href={`/music/${release.id}`}
                className="release-link"
                title={release.title}
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
