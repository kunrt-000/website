import Button from "@/components/Button";
import Img from "react-optimized-image";
import Link from "next/link";
import music from "@/data/music";

const LatestMusicRelease = () => {
  const release: MusicRelease = music[0];

  return (
    <section className="container mx-auto px-6 md:px-16 py-8">
      <h1 className="font-medium">Latest Music Release</h1>
      <Link href={`/music/${release.id}`} passHref={true}>
        <a className="inline-flex flex-col md:flex-row md:items-center mb-2 md:mb-8 hover:bg-secondary">
          <div className="md:w-60 md:h-60">
            <Img
              webp
              src={require(`../../public/img/music/${release.id}.png`)}
              alt={`Cover art for ${release.title}`}
              sizes={[500, 1000, 2000]}
              breakpoints={[768, 1366]}
            />
          </div>
          <div className="my-6 md:px-8">
            <div className="text-xl">{release.date}</div>
            <div className="font-bold my-4 text-4xl">{release.title}</div>
            <div className="text-xl">
              {typeof release.genre === "object"
                ? `${release.genre[0]} / ${release.genre[1]}`
                : release.genre}
            </div>
          </div>
        </a>
      </Link>
      <div>
        <Button href="/music" external={false}>
          View All Releases
        </Button>
      </div>
    </section>
  );
};

export default LatestMusicRelease;
