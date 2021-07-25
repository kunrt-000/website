import Link from "next/link";
import styles from "@/styles/Button.module.scss";

type ButtonProps = {
  children: any;
  href: string;
  external?: boolean;
};

const Button = ({ children, href, external }: ButtonProps) => {
  if (external) {
    return (
      <a
        className={styles.button}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className={styles.button}>{children}</a>
      </Link>
    );
  }
};

export default Button;
