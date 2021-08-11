import Button from "../Button";
import Img from "react-optimized-image";

const InfoSection = ({ project }: { project: WorkProject }) => (
  <section className="container flex flex-col md:flex-row md:items-center mx-auto px-6 md:px-16 py-8 md:py-10">
    <div className="w-full md:w-auto md:min-w-[20rem] min-h-[15rem] md:min-h-[20rem] md:mr-4 relative bg-secondary">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10rem] h-[10rem]">
        <Img
          src={require(`../../public/icons/${project.id}/${project.id}.svg`)}
          alt={`Icon for ${project.title}`}
        />
      </div>
    </div>
    <div className="md:ml-4">
      <h1 className="font-semibold text-4xl md:text-5xl mt-8 mb-2 md:mt-0">
        {project.title}
      </h1>
      <div className="font-semibold text-lg mb-2 md:mb-4 text-gray-200">
        {project.techStack}
      </div>
      <p className="leading-[140%] mb-4 md:mb-6 lg:max-w-85p">
        {project.summary}
      </p>
      <div className="flex flex-col items-start">
        <Button className="mb-4" href={project.website} external={true}>
          Visit Website
        </Button>
        {project.repository && (
          <Button href={project.repository} external={true} outlined>
            Repository
          </Button>
        )}
      </div>
    </div>
  </section>
);

export default InfoSection;
