type Author = {
  name: string;
  image: string;
  designation: string;
};

export type BPH = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  publishDate: string;
};
