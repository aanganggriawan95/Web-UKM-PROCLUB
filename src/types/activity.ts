type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Activity = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  publishDate: string;
};
