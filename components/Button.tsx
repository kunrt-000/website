import Link from "next/link";
import styles from "@/styles/Button.module.scss";

type ButtonProps = {
  children: any;
  href: string;
  external?: boolean;
  outlined?: boolean;
};

const Button = ({ children, href, external, outlined }: ButtonProps) => {
  if (external) {
    return (
      <a
        className={styles.button}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        data-outlined={outlined}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className={styles.button} data-outlined={outlined}>
          {children}
        </a>
      </Link>
    );
  }
};

export default Button;
