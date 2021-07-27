type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  date: string;
  image?: string;
};

type WorkProject = {
  id: string;
  title: string;
  techStack: string;
  summary: string;
  website: string;
  description: string;
};

type MusicRelease = {
  id: string;
  date: string;
  title: string;
  genre: string | [string, string];
  tracklist: {
    name: string;
    link: string;
    length: string;
  }[];
  links: {
    bandcamp: string;
    apple: string;
    spotify: string;
  };
  description: string;
};
