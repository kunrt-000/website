import Button from "@/components/Button";
import music from "@/data/music";
import FeaturedMusicRelease from "../FeaturedMusicRelease";

const LatestMusicRelease = () => {
  const release: MusicRelease = music[0];

  return (
    <section className="container mx-auto px-6 md:px-16 py-8">
      <h1 className="font-medium">Latest Music Release</h1>
      <FeaturedMusicRelease release={release} />
      <div>
        <Button href="/music" external={false}>
          View All Releases
        </Button>
      </div>
    </section>
  );
};

export default LatestMusicRelease;
