import styles from "@/styles/altus/Header.module.scss";
import cta from "@/styles/HeaderCTA.module.scss";
import Link from "next/link";
import Img from "react-optimized-image";
import icon from "../../public/icons/altus/altus.svg";

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/altus" passHref={true}>
            <a className={styles.logo}>
              <div className={styles.icon}>
                <Img src={icon} alt="Altus logo" />
              </div>
              <div className={styles.logoText}>Altus</div>
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <a className={styles.item} href="#features">
            Features
          </a>
          <a className={styles.item} href="#screenshots">
            Screenshots
          </a>
          <a className={styles.item} href="#support">
            Support
          </a>
          <a className={styles.cta} href="#downloads">
            Download
          </a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
