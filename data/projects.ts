import Electron from "@/icons/Electron";
import HTML5 from "@/icons/HTML5";
import JS from "@/icons/JavaScript";
import TS from "@/icons/TypeScript";
import Sass from "@/icons/Sass";
import NextJS from "@/icons/NextJS";
import PaintRoller from "@/icons/PaintRoller";
import Parcel from "@/icons/Parcel";

let projects: Project[] = [
  {
    id: "altus",
    title: "Altus",
    category: "Desktop App",
    description:
      "Altus is a desktop client for WhatsApp Web with features to enhance the experience such as multiple account support, theme customization and much more.",
    tech: [
      { title: "Electron", icon: Electron },
      { title: "HTML5/CSS", icon: HTML5 },
      { title: "JavaScript", icon: JS },
    ],
    website: "https://github.com/amanharwara/altus",
    repository: "https://github.com/amanharwara/altus",
    image: {
      srcSet: require(`../public/projects/altus.jpg?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`)
        .srcSet,
      src: require(`../public/projects/altus.jpg?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`)
        .src,
      alt: "Altus",
      lqip: require(`../public/projects/altus.jpg?lqip-colors`)[0],
    },
    align: "vertical-left",
  },
  {
    id: "acoustic-code",
    title: "Acoustic Code",
    category: "Blog / Website",
    description:
      "Acoustic Code is a blog that I run which covers music and programming related topics, sometimes both at once. Recently I re-designed it and moved it from a Hexo backend to Next.js.",
    tech: [
      {
        title: "Next.js",
        icon: NextJS,
      },
      {
        title: "TypeScript",
        icon: TS,
      },
      {
        title: "Sass",
        icon: Sass,
      },
      {
        title: "EmotionJS",
        icon: PaintRoller,
      },
    ],
    website: "https://amanharwara.xyz/blog",
    repository: "https://github.com/amanharwara/website",
    image: {
      srcSet: require(`../public/projects/acoustic-code.png?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`)
        .srcSet,
      src: require(`../public/projects/acoustic-code.png?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`)
        .src,
      alt: "Acoustic Code",
      lqip: require(`../public/projects/acoustic-code.png?lqip-colors`)[0],
    },
    align: "vertical-right",
  },
  {
    title: "Operate",
    category: "Web App",
    id: "operate",
    description:
      'Operate is an attempt at creating a very basic "operating system" inside the browser. So far it imitates the style of older operating systems and has very few basic apps.',
    tech: [
      {
        title: "ParcelJS",
        icon: Parcel,
      },
      {
        title: "JavaScript",
        icon: JS,
      },
      {
        title: "Sass",
        icon: Sass,
      },
    ],
    website: "https://amanharwara.github.io/operate",
    repository: "https://github.com/amanharwara/operate",
    image: {
      srcSet: require(`../public/projects/operate.png?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`)
        .srcSet,
      src: require(`../public/projects/operate.png?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`)
        .src,
      alt: "Operate",
      lqip: require(`../public/projects/operate.png?lqip-colors`)[0],
    },
    align: "horizontal-top",
  },
  {
    title: "Beetle",
    category: "Extension",
    id: "beetle",
    description:
      "Beetle is a WebExtension using which you can easily get logins from BugMeNot for any website you're visiting.\nWith Beetle, you don't need to open BugMeNot every time you want to use a throwaway login.",
    tech: [
      { title: "HTML5 / CSS3", icon: HTML5 },
      { title: "JavaScript", icon: JS },
    ],
    website: "https://github.com/amanharwara/beetle",
    repository: "https://github.com/amanharwara/beetle",
    image: {
      srcSet: require(`../public/projects/beetle.png?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`)
        .srcSet,
      src: require(`../public/projects/beetle.png?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`)
        .src,
      lqip: require(`../public/projects/beetle.png?lqip-colors`)[0],
      alt: "Beetle",
    },
    align: "horizontal-bottom",
  },
];

export default projects;
