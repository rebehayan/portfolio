import { FaChalkboardTeacher, FaCodepen, FaGithub, FaLaptopCode, FaQuoteRight, FaTv, FaYoutube } from "react-icons/fa";
import { SiFuturelearn, SiNaver, SiUdemy } from "react-icons/si";

export const SNSList = [
  {
    link: "https://youtube.com/rebehayan",
    title: "유튜브",
    iconComponent: FaYoutube,
    iconCSS: "group-hover:text-red-600",
  },
  {
    link: "https://blog.naver.com/rebehayan",
    title: "네이버블로그",
    iconComponent: SiNaver,
    iconCSS: "group-hover:text-emerald-600",
  },
  {
    link: "https://rebehayan.com/",
    title: "온라인강의",
    iconComponent: FaChalkboardTeacher,
    iconCSS: "group-hover:text-cyan-800",
  },
  {
    link: "https://smartstore.naver.com/rebehayan",
    title: "오프라인강의",
    iconComponent: FaLaptopCode,
    iconCSS: "group-hover:text-cyan-800",
  },
  {
    link: "https://www.inflearn.com/users/191302/@rebehayan",
    title: "인프런",
    iconComponent: SiFuturelearn,
    iconCSS: "group-hover:text-emerald-500",
  },
  {
    link: "https://www.udemy.com/user/haseongpil/",
    title: "유데미",
    iconComponent: SiUdemy,
    iconCSS: "group-hover:text-indigo-800",
  },
  {
    link: "https://tv.naver.com/rebehayan",
    title: "네이버TV",
    iconComponent: FaTv,
    iconCSS: "group-hover:text-emerald-600",
  },
  {
    link: "https://github.com/rebehayan",
    title: "Github",
    iconComponent: FaGithub,
    iconCSS: "group-hover:text-black",
  },
  {
    link: "https://codepen.io/rebehayan",
    title: "Codepen",
    iconComponent: FaCodepen,
    iconCSS: "group-hover:text-stone-600",
  },
];
