import styles from "@/styles/index/WorkSection.module.scss";
import work from "@/data/work";
import Button from "../Button";
import ArrowRight from "../icons/ArrowRight";
import Img from "react-optimized-image";
import Link from "next/link";
import section from "@/styles/components/Section.module.scss";
import padding from "@/styles/util/Padding.module.scss";
import flex from "@/styles/util/Flex.module.scss";

const WorkSection = () => (
  <section
    className={`${section.section} ${padding.px} ${padding.py}`}
    id="work"
  >
    <h1>My Work</h1>
    <div className={`${flex.flex} ${flex.rwrap_s}`}>
      {work.map((project, i) => (
        <div
          className={`${styles.project} ${flex.flex} ${flex.column_s} ${flex.row_m}`}
          key={project.id}
          data-featured={i === 0}
        >
          <Link href={`/work/${project.id}`} passHref={true}>
            <a>
              <div
                className={`${styles.image} ${flex.flex} ${flex.alignCenter} ${flex.justifyCenter}`}
              >
                <Img
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
