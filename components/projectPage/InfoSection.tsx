import styles from "@/styles/project/InfoSection.module.scss";
import Button from "../Button";
import Img from "react-optimized-image";

const InfoSection = ({ project }: { project: WorkProject }) => (
  <section className={styles.infoSection}>
    <div className={styles.image}>
      <div className={styles.icon}>
        <Img
          src={require(`../../public/icons/${project.id}/${project.id}.svg`)}
          alt={`Icon for ${project.title}`}
        />
      </div>
    </div>
    <div className={styles.meta}>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.techStack}>{project.techStack}</div>
      <p className={styles.description}>{project.description}</p>
      <Button href={project.website} external={true}>
        Visit Website
      </Button>
    </div>
  </section>
);

export default InfoSection;
