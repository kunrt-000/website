import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
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
              <a className={styles.item} data-active={router.pathname === "/"}>
                Home
              </a>
            </Link>
            <Link href="/#work" passHref={true}>
              <a className={styles.item}>Work</a>
            </Link>
            <Link href="/music" passHref={true}>
              <a
                className={styles.item}
                data-active={router.pathname.includes("/music")}
              >
                Music
              </a>
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
};

export default Header;
