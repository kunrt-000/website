import Electron from "../components/icons/Electron";
import HTML5 from "../components/icons/HTML5";
import JS from "../components/icons/JavaScript";
import TS from "../components/icons/TypeScript";
import Sass from "../components/icons/Sass";
import NextJS from "../components/icons/NextJS";
import Rust from "../components/icons/Rust";

let projects: Project[] = [
  {
    title: "Altus",
    category: "hybrid-app",
    description:
      "Altus is a desktop client for WhatsApp with multiple account support & themes.",
    tech: [
      { title: "Electron", icon: Electron },
      { title: "HTML5/CSS", icon: HTML5 },
      { title: "JavaScript", icon: JS },
    ],
    website: "https://github.com/amanharwara/altus",
    repository: "https://github.com/amanharwara/altus",
  },
  {
    title: "Aman Harwara",
    category: "website",
    description:
      "My personal portfolio website i.e. the one you are using right now.",
    tech: [
      { title: "NextJS", icon: NextJS },
      { title: "SASS", icon: Sass },
      { title: "TypeScript", icon: TS },
    ],
    website: "https://amanharwara.xyz/",
    repository: "https://github.com/amanharwara/website",
  },
  {
    title: "Sangeet",
    category: "native-app",
    description:
      "Sangeet is a music metadata editor for the terminal with an album art downloader.",
    tech: [{ title: "Rust", icon: Rust }],
    website: "https://github.com/amanharwara/sangeet",
    repository: "https://github.com/amanharwara/sangeet",
  },
];

export default projects;
