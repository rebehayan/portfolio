import React, { useEffect, useRef, useState } from "react";
import me1 from "../assets/me3.jpg";
import me2 from "../assets/me2.jpg";
import me2video from "../assets/me4.mp4";
import { skills } from "../data/aboutSkill.js";
import { IconAccessibility, IconCSS, IconFigma, IconGit, IconGithub, IconHTML, IconJS, IconPs, IconReact, IconSCSS, IconSwiper, IconTailwind, IconTS, IconVite, IconVSCode } from "../data/icons.jsx";
import { SNSList } from "../data/sns.js";
import Opentalk from "../components/main/Opentalk.jsx";
import { useTitleHook } from "../utils/useTitleHook.js";
import { projects } from "../data/portfolio.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { update } from "../utils/supa.js";

gsap.registerPlugin(ScrollTrigger);

const skillIconStyle = "opacity-40 hover:opacity-100 transition-all duration-500";
const section1Animation = (selector1, selector2, selector3) => {
  gsap
    .timeline()
    .fromTo(
      selector1.querySelectorAll(".item div"),
      {
        y: 100,
      },
      {
        y: 0,
        ease: "circ.inOut",
        duration: 1,
        stagger: 0.3,
      }
    )
    .fromTo(
      selector2.querySelector(".ani1"),
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        ease: "circ.inOut",
      },
      "-=0.2"
    )
    .fromTo(
      selector2.querySelector(".ani2"),
      {
        width: 0,
      },
      {
        width: 80,
        ease: "circ.inOut",
      }
    )
    .fromTo(
      selector2.querySelector(".ani3"),
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        ease: "circ.inOut",
      }
    )
    .fromTo(
      selector3.querySelectorAll(".item"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: {
          each: 0.3,
          from: "random",
        },
      }
    )
    .fromTo(
      selector3.querySelectorAll(".item div"),
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
      },
      "-=0.3"
    );
};

const skillAnimation = (selector) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: selector,
        start: "top center",
        toggleActions: "play none none none",
      },
    })
    .fromTo(
      selector.querySelector("h2"),
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
      }
    )
    .fromTo(
      selector.querySelector(".text"),
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
      }
    )
    .fromTo(
      selector.querySelectorAll(".skills li"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: "back.inOut",
      }
    )
    .fromTo(
      selector.querySelectorAll(".sns li"),
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        ease: "bounce.inOut",
        stagger: {
          each: 0.2,
          // from: "random",
        },
      }
    );
};

const eduCount = async () => {
  const count = await update();
  return count.length;
};

export default function About() {
  useTitleHook();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const skillRef = useRef();
  const [getCount, setGetCount] = useState(0);

  useEffect(() => {
    section1Animation(section1Ref.current, section2Ref.current, section3Ref.current);
    skillAnimation(skillRef.current);
    eduCount().then((count) => setGetCount(count));
  }, []);

  return (
    <>
      <section className="area">
        <div>
          <div className="font-[base] font-normal text-4xl text-center break-keep leading-[1.5] section1" ref={section1Ref}>
            <div className="overflow-hidden item">
              <div>독학으로 이 자리에 오기까지, 수많은 시행착오를 겪었습니다.</div>
            </div>
            <div className="overflow-hidden item">
              <div>그 길이 결코 쉽지 않았기에, 저와 같은 고통을 겪지 않도록 돕는 것이 이제 제 목표입니다.</div>
            </div>
            <div className="overflow-hidden item">
              <div>제 경험이 누군가의 빛이 되길 바라며, 함께 성장하는 여정을 만들어가고 싶습니다.</div>
            </div>
          </div>
          <div className="flex mx-auto mt-20 w-min font-[base] font-light text-sm items-start gap-5 " ref={section2Ref}>
            <div className="flex items-center gap-5">
              <h2 className="whitespace-nowrap font-medium ani1">01. 이곳에 오기까지</h2>
              <span className="w-20 border-t-[1px] border-black ani2"></span>
            </div>
            <p className="break-keep  tablet:w-[30rem] ani3">
              실전에서 얻은 경험이 강의의 뼈대를 단단하게 만듭니다. 이것이 제 교육 철학입니다. 강단에 서는 시간 외에도 현장에서 끊임없이 배우고 성장하는 과정을 거듭하고 있습니다. 이 모든 여정이
              여러분의 성장 곡선을 더 가파르고 의미 있게 만들어 드리기 위함입니다.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-[2.5fr_1fr_1fr] gap-3 my-20 h-[50rem] grid-rows-2" ref={section3Ref}>
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 relative after:absolute after:inset-0 after:bg-black after:opacity-0 item">
          <img src={me1} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="item">
          <img src={me2} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="bg-neutral-100 relative p-10 item">
          <div className="font-[base] text-lg font-light">
            현재까지 {getCount}회
            <br />
            강의를 진행 했습니다.
          </div>
          <div className="absolute left-10 bottom-10 text-8xl font-bold font-[base]">{getCount}+</div>
        </div>
        <div className="bg-neutral-800 text-white p-10 relative item">
          <div className="font-[base] text-lg font-light">
            이곳에 오기까지
            <br />총 {projects.length}개의
            <br />
            프로젝트를 수행했습니다.
          </div>
          <div className="absolute left-10 bottom-10 text-8xl font-bold font-[base]">{projects.length}+</div>
        </div>
        <div className="item">
          <video src={me2video} muted autoPlay loop className="w-full h-full object-cover"></video>
        </div>
      </section>
      <section className="area border-t-[1px] border-gray-200" ref={skillRef}>
        <div>
          <div className="grid grid-cols-2 items-end py-20">
            <h2 className="font-[teko] mobile:text-4xl tablet:text-7xl font-extrabold text-pretty mobile:w-full tablet:w-96 uppercase leading-[0.8]">Skills & Expertise</h2>
            <p className="font-[base] w-100 break-keep justify-self-end text">
              웹 퍼블리싱과 프론트엔드 개발을 경험하고, 효율적이고 유지보수하기 쉬운 웹 환경 구축에 집중해 왔습니다. 더 나은 사용자 경험을 위해 지속적으로 학습하며, 새로운 기술과 트렌드에 열린 자세로
              임하고 있습니다.
            </p>
            <ul className="grid grid-cols-3 gap-x-30 gap-y-20 col-span-full mt-15 font-[base] skills">
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
            <ul className="inline-grid grid-cols-5 grid-rows-3 sns">
              <li aria-hidden></li>
              <li className="col-start-3 col-end-6 self-center p-15 font-[base] text-left">저와 함께 성장해보세요.</li>
              {SNSList.map(({ iconComponent, link, title, iconCSS }, index) => {
                const snsCSS = iconCSS.replace("group-hover:", "");
                const classSet = (index) => {
                  if (index === 0) {
                    return "col-start-2 col-end-3 row-start-1 row-end-2 ml-[-1px] mt-[-1px]";
                  } else if (index === 5) {
                    return "col-start-4 col-end-5 row-start-3 row-end-4 ml-[-1px] mt-[-1px]";
                  } else if (index === 6) {
                    return "col-start-5 col-end-6 row-start-3 row-end-4 ml-[-1px] mt-[-1px]";
                  } else {
                    return "ml-[-1px] mt-[-1px]";
                  }
                };
                return (
                  <li key={index} className={classSet(index) + " font-[base] group"}>
                    <a
                      href={link}
                      target="_blank"
                      className={
                        "transition-all duration-300 text-gray-500 border-gray-300 border-[1px] aspect-square w-50 flex flex-col justify-center items-center text-light " +
                        `group-hover:${snsCSS} group-hover:border-${snsCSS.replace("text-", "")}`
                      }
                    >
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
          <IconFigma className={skillIconStyle} />
          <IconPs className={skillIconStyle} />
        </div>
      </section>

      <Opentalk />
    </>
  );
}
