type Project = {
  id?: string;
  title: string;
  category: string;
  description: string;
  tech: ProjectTech[];
  website: string;
  repository?: string;
  image: ProjectImage;
};

type ProjectImage = {
  src: string;
  alt: string;
  color?: string;
};

type ProjectTech = {
  title: string;
  icon: JSX.Element;
};
