import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-primary border-b border-tertiary sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between flex-wrap bg-teal px-6 md:px-16 py-3">
        <div className="flex items-center flex-no-shrink mr-6">
          <Link href="/" passHref={true}>
            <a className="font-semibold text-xl tracking-tight">Aman Harwara</a>
          </Link>
        </div>
        <label
          htmlFor="menu-check"
          className="menu-icon lg:hidden relative flex items-center px-3 py-2 border rounded hover:underline hover:border-white"
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input
          className="absolute top-0 left-0 invisible"
          type="checkbox"
          id="menu-check"
        />
        <div className="menu hidden w-full lg:flex lg:items-center lg:w-auto">
          <ul className="text-sm lg:flex-grow" aria-label="Primary navigation">
            <li className="menu-item">
              <Link href="/" passHref={true}>
                <a>Home</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/#work" passHref={true}>
                <a>Work</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/music" passHref={true}>
                <a>Music</a>
              </Link>
            </li>
            <li className="inline-block text-sm px-3.5 py-2 leading-snug rounded bg-blue-800 hover:bg-blue-700 text-white mt-4 lg:mt-0">
              <Link href="/#contact" passHref={true}>
                <a>Contact Me</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
