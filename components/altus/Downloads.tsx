import styles from "@/styles/altus/Downloads.module.scss";
import common from "@/styles/altus/Altus.module.scss";
import Linux from "../icons/altus/Linux";
import MacOS from "../icons/altus/macOS";
import Windows from "../icons/altus/Windows";
import Button from "../Button";
import { AltusDownloadsProps } from "types/altus";

const Downloads = ({ version, links }: AltusDownloadsProps) => (
  <section id="downloads" className={styles.downloadSection}>
    <h1 className={common.heading}>Downloads</h1>
    <div className={styles.downloads}>
      <div className={styles.item}>
        <div className={styles.meta}>
          <div className={styles.icon}>
            <Windows />
          </div>
          <div className={styles.title}>Windows</div>
          <div className={styles.version}>{version}</div>
        </div>
        <Button href={links.windows} external={true}>
          Download
        </Button>
      </div>
      <div className={styles.item}>
        <div className={styles.meta}>
          <div className={styles.icon}>
            <Linux />
          </div>
          <div className={styles.title}>Linux</div>
          <div className={styles.version}>{version}</div>
        </div>
        <Button href={links.linux} external={true}>
          Download
        </Button>
      </div>
      <div className={styles.item}>
        <div className={styles.meta}>
          <div className={styles.icon}>
            <MacOS />
          </div>
          <div className={styles.title}>macOS (Arm)</div>
          <div className={styles.version}>{version}</div>
        </div>
        <Button href={links.macOSarm} external={true}>
          Download
        </Button>
      </div>
      <div className={styles.item}>
        <div className={styles.meta}>
          <div className={styles.icon}>
            <MacOS />
          </div>
          <div className={styles.title}>macOS (Intel)</div>
          <div className={styles.version}>{version}</div>
        </div>
        <Button href={links.macOSintel} external={true}>
          Download
        </Button>
      </div>
    </div>
  </section>
);

export default Downloads;
