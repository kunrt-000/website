type Links = {
  download: string;
  spotify: string;
  apple: string;
};

type Track = {
  title: string;
  links: Links;
  number: string;
};

type ReleasePage = {
  title: string;
  genre: {
    primary: string;
    secondary: string;
  };
  year: string | Number;
  type: string;
  description: string;
  tracklist: Track[];
  links: Links;
  id?: string;
};
