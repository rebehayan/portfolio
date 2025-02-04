import VideoCount from "../utils/youtube.js";
import { projects } from "./portfolio.js";

const projectLength = projects.length;
const year = new Date().getFullYear();
const career = year.toString().slice(2, 4);

export const carrerCountData = [
  {
    number: career,
    title: "years of experience",
  },
  {
    number: 25000,
    title: "happy customers",
  },
  {
    number: projectLength + 161,
    title: "projects completed",
  },
  {
    number: VideoCount,
    title: "insightful learning resources",
  },
];
