import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import music from "@/data/music";
import Img from "react-optimized-image";
import Button from "@/components/Button";
import PlayIcon from "@/components/icons/PlayIcon";

const ReleasePage = ({ release }: { release: MusicRelease }) => (
  <div id="release-page">
    <Head>
      <title>{release.title} | Aman Harwara</title>
      <meta name="title" content={`${release.title} | Aman Harwara`} />
      <meta name="description" content={`${release.description}`} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://amanharwara.com/work/${release.id}`}
      />
      <meta property="og:title" content={`${release.title} | Aman Harwara`} />
      <meta property="og:description" content={`${release.description}`} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://amanharwara.com/work/${release.id}`}
      />
      <meta
        property="twitter:title"
        content={`${release.title} | Aman Harwara`}
      />
      <meta property="twitter:description" content={`${release.description}`} />
      <meta property="twitter:image" content="" />
    </Head>
    <section className="container mx-auto flex flex-col md:flex-row md:items-center px-6 md:px-16 py-8 md:py-12">
      <div className="w-full min-h-[15rem] relative mb-4 md:mb-0 md:mr-5 md:flex-shrink-0 md:w-[20rem] md:h-[20rem]">
        <Img
          src={require(`../../images/music/${release.id}.png`)}
          alt={`Cover art for for ${release.title}`}
        />
      </div>
      <div className="md:ml-5">
        <div className="mb-3 text-gray-200 font-medium">
          {new Date(release.date).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <h1 className="my-3.5 font-semibold text-[2.5rem] tracking-snug">
          {release.title}
        </h1>
        <div className="mb-4 text-gray-200 font-medium text-lg">
          {typeof release.genre === "object"
            ? `${release.genre[0]}, ${release.genre[1]}`
            : release.genre}
        </div>
        <p className="mb-5 2xl:w-[75%] leading-normal">{release.description}</p>
        <div>
          <Button
            className="mb-4 md:mr-4"
            href={release.links.bandcamp}
            external={true}
          >
            Buy on Bandcamp
          </Button>
          {release.links.spotify && (
            <Button
              className="mb-4 md:mr-4"
              href={release.links.spotify}
              external={true}
              outlined
            >
              Listen on Spotify
            </Button>
          )}
          {release.links.apple && (
            <Button
              className="mb-4 md:mr-4"
              href={release.links.apple}
              external={true}
              outlined
            >
              Listen on Apple Music
            </Button>
          )}
        </div>
      </div>
    </section>
    <section className="container mx-auto px-6 md:px-16 py-4 md:py-6">
      <h1>Tracklist</h1>
      <div>
        {release.tracklist.map((track, i) => (
          <a
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center w-full p-3.5 rounded-md hover:bg-tertiary"
            key={i}
          >
            <div className="relative w-[2rem] h-[2rem] transition-opacity">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white fill-current group-hover:opacity-100">
                <PlayIcon className="w-[1.5rem] h-[1.5rem]" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0">
                {i + 1}
              </div>
            </div>
            <div className="font-semibold flex-grow md:pl-4">{track.name}</div>
            <div className="font-medium text-sm text-gray-300 pr-3">
              {track.length}
            </div>
          </a>
        ))}
      </div>
    </section>
  </div>
);

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let release = music.find((release) => release.id === context?.params?.id);

  if (!release) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      release,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = music.map((release) => `/music/${release.id}`);

  return {
    paths,
    fallback: "blocking",
  };
};

export default ReleasePage;
