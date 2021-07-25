type BlogPost = {
  slug: string;
  type: string;
  title: string;
  summary: string;
  content: string;
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
  tracklist: string[];
  links: {
    bandcamp: string;
    apple: string;
    spotify: string;
  };
  description: string;
};
