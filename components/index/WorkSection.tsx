import common from "@/styles/Index.module.scss";
import styles from "@/styles/index/WorkSection.module.scss";
import work from "@/data/work";
import Button from "../Button";
import ArrowRight from "../icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";

const WorkSection = () => (
  <section className={styles.workSection} id="work">
    <h1 className={common.heading}>My Work</h1>
    <div className={styles.projectList}>
      {work.map((project, i) => (
        <div
          className={styles.project}
          key={project.id}
          data-featured={i === 0}
        >
          <Link href={`/work/${project.id}`} passHref={true}>
            <a>
              <div className={styles.image}>
                <Image
                  src={require(`../../public/icons/${project.id}/${project.id}.svg`)}
                  alt={`Project icon for ${project.title}`}
                />
              </div>
            </a>
          </Link>
          <div className={styles.meta}>
            <Link href={`/work/${project.id}`} passHref={true}>
              <a>
                <div className={styles.title}>{project.title}</div>
              </a>
            </Link>
            <div className={styles.techStack}>{project.techStack}</div>
            <div className={styles.summary}>{project.summary}</div>
            <Button href={`/work/${project.id}`} external={false}>
              <div className={styles.label}>Read More</div>
              <div className={styles.icon}>
                <ArrowRight />
              </div>
            </Button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkSection;
