import { getVideoCount } from "../utils/youtube.js";
("../utils/youtube.js");
import { projects } from "./portfolio.js";

const projectLength = projects.length;
const year = new Date().getFullYear();
const career = year.toString().slice(2, 4);

export const carrerCountData = [
  {
    number: career,
    title: "years of experience",
    kor: "년의 경력",
  },
  {
    number: 25000,
    title: "happy customers",
    kor: "명과 협업",
  },
  {
    number: projectLength,
    title: "projects completed",
    kor: "개의 프로젝트",
  },
  {
    number: getVideoCount,
    title: "Learning resources",
    kor: "개의 강의영상",
  },
];
