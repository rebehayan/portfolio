import { MdOutlineOndemandVideo, MdOutlineSupervisedUserCircle } from "react-icons/md";
import { TbCube3dSphere } from "react-icons/tb";
import { getVideoCount } from "../utils/youtube.js";

export const serviceList = [
  {
    link: "portfolio",
    linktext: "포트폴리오 바로가기",
    title: "Development",
    subtitle: "아이디어를 현실로 만드는 개발자",
    description: "수십년간의 경험으로 안정된 프로젝트를 이끌어 나갑니다. ",
    iconComponent: TbCube3dSphere,
  },
  {
    link: "education",
    linktext: "채널가이드 바로가기",
    title: "Youtube",
    subtitle: "배우고, 공유하고, 성장하는 콘텐츠",
    description: `개의 강의 영상을 통해 누구나 쉽게 배우고 성장할 수 있도록 돕습니다.`,
    iconComponent: MdOutlineOndemandVideo,
  },
  {
    link: "education",
    linktext: "강의가이드 바로가기",
    title: "Education",
    subtitle: "웹 퍼블리싱 & 프론트엔드 실무형 강의",
    description: "프로젝트 기반 학습을 통해 더 빠르고 효과적으로 성장할 수 있습니다.",
    iconComponent: MdOutlineSupervisedUserCircle,
  },
];
