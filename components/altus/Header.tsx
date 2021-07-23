import styles from "@/styles/altus/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import icon from "../../public/icons/altus/altus.svg";

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/altus" passHref={true}>
            <div className={styles.logo}>
              <div className={styles.icon}>
                <Image src={icon} alt="Altus logo" />
              </div>
              <div className={styles.logoText}>Altus</div>
            </div>
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
