import React from "react";
import image from "../assets/visual.jpg";
import { getLatestVideos } from "../utils/youtube.js";
import { skills } from "../data/aboutSkill.js";

export default function About() {
  const last = getLatestVideos(5).then((data) => {
    console.log(data);
  });

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
          <div className="grid grid-cols-2 items-end">
            <h2 className="font-[teko] mobile:text-4xl tablet:text-7xl font-extrabold text-pretty mobile:w-full tablet:w-96 uppercase leading-[0.8]">Skills & Expertise</h2>
            <p className="font-[base]">
              웹 퍼블리싱과 프론트엔드 개발을 경험하며, 효율적이고 유지보수하기 쉬운 웹 환경 구축에 집중해 왔습니다. 더 나은 사용자 경험을 위해 지속적으로 학습하며, 새로운 기술과 트렌드에 열린 자세로
              임하고 있습니다.
            </p>
            <ul className="grid grid-cols-3 gap-10 col-span-full mt-15 font-[base]">
              {skills.map(({ title, description, icon }, index) => (
                <li key={index} className="flex flex-col gap-3">
                  {React.createElement(icon, { className: "w-15 h-15 mobile:row-[1/4] tablet:row-[1/3]" })}
                  <strong className="text-2xl font-normal">{title}</strong>
                  <div className="break-keep font-light">{description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

// https://crowdytheme.com/html/arolax/creative-agency.html#
