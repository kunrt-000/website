import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="/" passHref={true}>
          Aman Harwara
        </Link>
      </div>
      <div className={styles.right}>
        <nav className={styles.nav}>
          <Link href="/" passHref={true}>
            <a className={styles.item}>Home</a>
          </Link>
          <Link href="/#work" passHref={true}>
            <a className={styles.item}>Work</a>
          </Link>
          <Link href="/music" passHref={true}>
            <a className={styles.item}>Music</a>
          </Link>
          <Link href="/blog" passHref={true}>
            <a className={styles.item}>Blog</a>
          </Link>
        </nav>
        <div className={styles.menuButton}>
          <MenuIcon />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
