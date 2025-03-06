import { update } from "../utils/supa.js";
import { getVideoCount } from "../utils/youtube.js";
import { projects } from "./portfolio.js";

const projectLength = projects.length;
const year = new Date().getFullYear();
const career = year.toString().slice(2, 4);

export const carrerCountData = async () => {
  const videoCount = await getVideoCount();
  const eduCount = await update();
  return [
    {
      number: career,
      title: "years of experience",
      kor: "년의 경력",
    },
    {
      number: eduCount.length || 0,
      title: "Lectures",
      kor: "강의 횟수",
    },
    {
      number: projectLength,
      title: "projects completed",
      kor: "개의 프로젝트",
    },
    {
      number: videoCount || 0,
      title: "Learning resources",
      kor: "개의 강의영상",
    },
  ];
};
