import styles from "@/styles/Header.module.scss";
import cta from "@/styles/HeaderCTA.module.scss";
import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import { useRouter } from "next/router";
import { useState } from "react";
import CloseIcon from "./icons/CloseIcon";

const Header = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" passHref={true}>
            Aman Harwara
          </Link>
        </div>
        <div className={styles.right}>
          <label htmlFor="menu-button" className={styles.menuButton}>
            {!checked ? <MenuIcon /> : <CloseIcon />}
          </label>
          <input
            type="checkbox"
            className={styles.menuButtonCheck}
            name="menu-button"
            id="menu-button"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <nav className={styles.nav} onClick={() => setChecked(false)}>
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
            <Link href="/#contact" passHref={true}>
              <a className={cta.cta}>Contact Me</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
