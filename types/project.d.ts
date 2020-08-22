type Project = {
  id?: string;
  title: string;
  category: string;
  description: string;
  tech: ProjectTech[];
  website: string;
  repository?: string;
  image: ProjectImage;
  align:
    | "vertical-left"
    | "vertical-right"
    | "horizontal-top"
    | "horizontal-bottom";
};

type ProjectImage = {
  srcSet: string;
  src: string;
  alt: string;
  lqip: string;
};

type ProjectTech = {
  title: string;
  icon: JSX.Element;
};
