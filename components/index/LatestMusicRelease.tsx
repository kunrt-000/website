import Button from "@/components/Button";
import Img from "react-optimized-image";
import Link from "next/link";
import music from "@/data/music";

const LatestMusicRelease = () => {
  const release: MusicRelease = music[0];

  const zeroPad = (num: number) =>
    num.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });

  const dateObj = new Date(release.date);
  const formattedDay = zeroPad(dateObj.getDay());
  const formattedMonth = zeroPad(dateObj.getMonth());
  const dateStr = `${formattedDay}.${formattedMonth}.${dateObj.getFullYear()}`;

  const genreStr =
    typeof release.genre === "object"
      ? `${release.genre[0]} / ${release.genre[1]}`
      : release.genre;

  return (
    <section className="container mx-auto px-6 md:px-16 py-8">
      <h1 className="font-medium">Latest Music Release</h1>
      <div className="flex flex-col md:flex-row md:items-center w-full p-8 md:p-14 mb-4 md:mb-8 bg-contrast">
        <div className="md:w-72 md:h-72">
          <Link href={`/music/${release.id}`} passHref={true}>
            <a>
              <Img
                webp
                src={require(`../../public/img/music/${release.id}.png`)}
                alt={`Cover art for ${release.title}`}
                sizes={[500, 1000, 2000]}
                breakpoints={[768, 1366]}
              />
            </a>
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:ml-14">
          <div className="uppercase text-sm md:text-lg font-semibold tracking-wider">
            New Music
          </div>
          <Link href={`/music/${release.id}`} passHref={true}>
            <a className="inline-block font-bold my-5 text-5xl">
              {release.title}
            </a>
          </Link>
          <div className="text-base md:text-lg mb-7">
            {dateStr} · {genreStr}
          </div>
          <div>
            <a
              className="inline-block py-4 px-6 mb-4 md:mb-0 mr-4 text-sm leading-none border border-transparent bg-white text-black uppercase font-semibold tracking-wide hover:underline"
              href={release.links.bandcamp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Bandcamp
            </a>
            {release.links.spotify ? (
              <a
                className="inline-flex py-4 px-6 text-sm leading-none border border-white bg-transparent text-white uppercase font-semibold tracking-wide hover:underline"
                href={release.links.bandcamp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <Button href="/music" external={false}>
          View All Releases
        </Button>
      </div>
    </section>
  );
};

export default LatestMusicRelease;
