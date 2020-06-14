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

type Release = {
  title: string;
  genre: string;
  year: string | Number;
  type: string;
  description: string;
  tracklist: Track[];
  links: Links;
};
