import React from "react";
import image from "../assets/visual.jpg";
import { getLatestVideos } from "../utils/youtube.js";
import { skills } from "../data/aboutSkill.js";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IconAccessibility, IconCSS, IconGit, IconGithub, IconHTML, IconJS, IconReact, IconSCSS, IconSwiper, IconTailwind, IconTS, IconVite, IconVSCode } from "../data/icons.jsx";
import { SNSList } from "../data/sns.js";
import { Email } from "../components/Email.jsx";
import Opentalk from "../components/main/Opentalk.jsx";

const skillIconStyle = "opacity-40 hover:opacity-80 transition-all duration-500";

export default function About() {
  return (
    <main>
      <section className="area">
        <div>
          <div className="font-[base] font-bold text-5xl text-center break-keep leading-[1.1]">
            취미로 시작한 길이 현재 저의 직업이 되었고,
            <br />그 과정에서 멘토 없이 성장하며 수많은 시행착오를 겪었습니다.
            <br />
            이러한 경험을 바탕으로, 후배들이 잘못된 학습으로
            <br />
            시간을 낭비하지 않도록 돕는 것이 저의 목표입니다.
          </div>
          <div className="flex mx-auto mt-10 w-min font-[base] font-light text-sm items-start gap-5 ">
            <div className="flex items-center gap-5">
              <h2 className="whitespace-nowrap font-medium">01. 이곳에 오기까지</h2>
              <span className="w-20 border-t-[1px] border-black"></span>
            </div>
            <p className="break-keep  tablet:w-[30rem]">
              저는 실무 경험이 탄탄한 강의가 가장 가치 있다고 믿습니다. 그래서 강의뿐만 아니라 실무를 병행하며 끊임없이 배우고 성장하고 있습니다. 이러한 노력으로 여러분이 더 빠르고 효율적으로 성장할
              수 있도록 최선을 다하겠습니다.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-[2.5fr_1fr_1fr] gap-3 my-20 h-[50rem] grid-rows-2">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3">
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>
        <div>
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>
        <div>100+</div>
        <div>We Hepled</div>
        <div>
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>
      </section>
      <section className="area border-t-[1px] border-gray-200">
        <div>
          <div className="grid grid-cols-2 items-end py-20">
            <h2 className="font-[teko] mobile:text-4xl tablet:text-7xl font-extrabold text-pretty mobile:w-full tablet:w-96 uppercase leading-[0.8]">Skills & Expertise</h2>
            <p className="font-[base] w-100 break-keep justify-self-end">
              웹 퍼블리싱과 프론트엔드 개발을 경험하고, 효율적이고 유지보수하기 쉬운 웹 환경 구축에 집중해 왔습니다. 더 나은 사용자 경험을 위해 지속적으로 학습하며, 새로운 기술과 트렌드에 열린 자세로
              임하고 있습니다.
            </p>
            <ul className="grid grid-cols-3 gap-x-30 gap-y-20 col-span-full mt-15 font-[base]">
              {skills.map(({ title, description, icon }, index) => (
                <li key={index} className="flex flex-col gap-5">
                  {React.createElement(icon, { className: "w-15 h-15 mobile:row-[1/4] tablet:row-[1/3]" })}
                  <strong className="text-2xl font-normal">{title}</strong>
                  <div className="break-keep font-light">{description}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-20 mt-20 text-center">
            <ul className="inline-grid grid-cols-5 grid-rows-3">
              <li aria-hidden></li>
              <li className="col-start-3 col-end-6 self-center p-15 font-[base] text-left">저와 함께 성장해보세요.</li>
              {SNSList.map(({ iconComponent, link, title, iconCSS }, index) => {
                const classSet = (index) => {
                  if (index === 0) {
                    return "col-start-2 col-end-3 row-start-1 row-end-2 ml-[-1px] mt-[-1px]";
                  } else if (index === 5) {
                    return "col-start-4 col-end-5 row-start-3 row-end-4 ml-[-1px] mt-[-1px]";
                  } else if (index === 6) {
                    return "col-start-5 col-end-6 row-start-3 row-end-4 ml-[-1px] mt-[-1px]";
                  } else {
                    return " ml-[-1px] mt-[-1px]";
                  }
                };
                return (
                  <li key={index} className={classSet(index) + " font-[base]"}>
                    <a href={link} target="_blank" className="text-gray-500 border-gray-300 border-[1px] aspect-square w-50 flex flex-col justify-center items-center text-light">
                      {React.createElement(iconComponent, { className: "mx-auto mb-2 w-8 h-8" })}
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-black py-20 text-white relative z-50">
        <div className="mx-auto w-[90vw] grid grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] gap-10 justify-center items-center">
          <IconHTML className={skillIconStyle} />
          <IconCSS className={skillIconStyle} />
          <IconJS className={skillIconStyle} />
          <IconTS className={skillIconStyle} />
          <IconSCSS className={skillIconStyle} />
          <IconTailwind className={skillIconStyle} />
          <IconReact className={skillIconStyle} />
          <IconVite className={skillIconStyle} />
          <IconGit className={skillIconStyle} />
          <IconGithub className={skillIconStyle} />
          <IconAccessibility className={skillIconStyle} />
          <IconSwiper className={skillIconStyle} />
          <IconVSCode className={skillIconStyle} />
        </div>
      </section>
      <Opentalk />
    </main>
  );
}

// https://crowdytheme.com/html/arolax/creative-agency.html#
