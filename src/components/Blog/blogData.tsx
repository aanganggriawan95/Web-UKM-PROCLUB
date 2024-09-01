import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 0,
    title: "Rifal Nigraha",
    paragraph: `Seseorang yang berprinsip "apapun masalahnya javascript stack nya"`,
    image: "/images/blog/rifal.jpg",
    author: {
      name: "Lulusan Bangkit Academy",
      image: "/images/blog/bangkit.jpg",
      designation: "Cloud computing",
    },
    tags: ["Fullstack Development"],
    publishDate: "2023",
  },
  {
    id: 1,
    title: "Aang Anggriawan",
    paragraph:
      "Mahasiswa semester VII Informatika yang berfokus di Frontend Development",
    image: "/images/blog/aang.jpg",
    author: {
      name: "Lulusan Dicoding Indonesia",
      image: "/images/blog/dicoding.webp",
      designation: "Frontend & Backend Developer",
    },
    tags: ["Frontend Development"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Muhamad Fahmi Aulia Noor",
    paragraph:
      "Mahasiswa semester V Informatika Yang sedang mendalami Backend Development Di PHP dan JavaScript Framework NodeJs",
    image: "/images/blog/fahmi.jpg",
    author: {
      name: "Sekolah Tinggi Teknologi Cipasung",
      image: "/images/blog/sttc.jpg",
      designation: "Content Writer",
    },
    tags: ["Backend Development"],
    publishDate: "Now",
  },
  {
    id: 3,
    title: "Muhammad Syihan Dzulamani",
    paragraph:
      "Mahasiswa semester VII Informatika yang berfokus di Backend Development",
    image: "/images/testimonials/zok.jpg",
    author: {
      name: "PMM Universitas Fajar",
      image: "/images/blog/kampusMerdeka.jpeg",
      designation: "Pertukaran Mahasiswa Merdeka",
    },
    tags: ["Backend Development"],
    publishDate: "2023",
  },
  {
    id: 4,
    title: "Isna Nadifatul Istiqomah",
    paragraph:
      "Mahasiswa semester VII Informatika yang berfokus di Backend Development",
    image: "/images/blog/isna.jpg",
    author: {
      name: "Lulusan Bangkit Academy",
      image: "/images/blog/bangkit.jpg",
      designation: "Cloud computing",
    },
    tags: ["Backend Development"],
    publishDate: "2023",
  },
];
export default blogData;
