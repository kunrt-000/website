import Link from "next/link";
import styles from "@/styles/Button.module.scss";

type ButtonProps = {
  children: any;
  href: string;
  external?: boolean;
  outlined?: boolean;
  className?: string;
};

const Button = ({
  children,
  href,
  external,
  outlined,
  className,
}: ButtonProps) => {
  if (external) {
    return (
      <a
        className={`${styles.button} hover:underline ${className}`}
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
        <a
          className={`${styles.button} hover:underline ${className}`}
          data-outlined={outlined}
        >
          {children}
        </a>
      </Link>
    );
  }
};

export default Button;
