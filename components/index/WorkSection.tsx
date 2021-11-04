import work from "@/data/work";
import ArrowRight from "../icons/ArrowRight";
import Img from "react-optimized-image";
import Link from "next/link";

const WorkSection = () => (
  <section
    className="container mx-auto px-6 md:px-16 py-8 pt-4 md:py-12"
    id="work"
  >
    <h1 className="font-medium">My Work</h1>
    <ul className="flex flex-wrap" aria-label="List of projects">
      {work.map((project, i) => (
        <li key={project.id}>
          <Link href={`/work/${project.id}`} passHref={true}>
            <a className="flex flex-col md:flex-row items-center w-full 2xl:min-h-[20rem] border-2 border-tertiary mb-5 md:mb-8 transition-colors duration-150 hover:bg-tertiary">
              <div className="project-thumb">
                <Img
                  webp
                  src={require(`../../public/img/${project.id}/thumb.png`)}
                  alt={`Project icon for ${project.title}`}
                />
              </div>
              <div className="p-4 md:p-8 md:w-[40%]">
                <div className="font-bold text-3xl md:text-4xl tracking-snug leading-snug mb-2">
                  {project.title}
                </div>
                <div className="font-semibold tracking-snug text-base text-gray-200">
                  {project.techStack}
                </div>
                <div className="my-4 md:my-8 text-base text-gray-200 md:leading-snug lg:max-w-85p">
                  {project.summary}
                </div>
                <div className="inline-flex items-center font-medium text-lg mb-1 text-white stroke-current">
                  <span>Read More</span>
                  <ArrowRight className="ml-2" />
                </div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default WorkSection;
