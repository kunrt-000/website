import styles from "@/styles/index/WorkSection.module.scss";
import work from "@/data/work";
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
        <Link href={`/work/${project.id}`} passHref={true} key={project.id}>
          <a
            className={`${styles.project} ${flex.flex} ${flex.column_s} ${flex.row_m}`}
            data-featured={i === 0}
          >
            <div
              className={`${styles.image} ${flex.flex} ${flex.alignCenter} ${flex.justifyCenter}`}
            >
              <Img
                webp
                src={require(`../../public/img/${project.id}/thumb.png`)}
                alt={`Project icon for ${project.title}`}
              />
            </div>
            <div className={styles.meta}>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.techStack}>{project.techStack}</div>
              <div className={styles.summary}>{project.summary}</div>
              <div className={styles.label}>
                <span>Read More</span>
                <ArrowRight />
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  </section>
);

export default WorkSection;
