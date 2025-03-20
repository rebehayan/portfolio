import React, { useEffect, useRef, useState } from "react";

import { getPlaylists } from "../utils/youtube.js";
import me from "../assets/me1.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTitleHook } from "../utils/useTitleHook.js";

gsap.registerPlugin(ScrollTrigger);

const headerGsap = (selector) => {
  const heroAni = gsap
    .timeline()
    .fromTo(
      selector.querySelector("video"),
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 2,
        ease: "power3.inOut",
      }
    )
    .fromTo(
      selector.querySelector(".video-copy"),
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      }
    )
    .fromTo(
      selector.querySelector(".video-copy h2"),
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "-=0.2"
    )
    .fromTo(
      selector.querySelector(".video-copy p"),
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "-=0.2"
    );

  ScrollTrigger.create({
    trigger: selector,
    start: "top center",
    toggleActions: "play none none none",
    duration: 1,
    animation: heroAni,
  });
};
const stepGsap = (selector) => {
  const stepAni = gsap
    .timeline()
    .fromTo(
      selector.querySelector("h2"),
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
      }
    )
    .fromTo(
      selector.querySelectorAll("li"),
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
        duration: 1,
        stagger: 0.3,
      }
    );

  ScrollTrigger.create({
    trigger: selector,
    start: "20% center",
    toggleActions: "play none none none",
    duration: 1,
    animation: stepAni,
  });
};
const youtubeGsap = (selector) => {
  const youtubeAni = gsap
    .timeline()
    .fromTo(
      selector.querySelector("h2"),
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
      }
    )
    .fromTo(
      selector.querySelectorAll("li"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
        duration: 1,
        stagger: 0.1,
      }
    );

  ScrollTrigger.create({
    trigger: selector,
    start: "top center",
    toggleActions: "play none none none",
    animation: youtubeAni,
  });
};

export default function Education() {
  const [playLists, setPlayLists] = useState([]);
  const [today, setToday] = useState();
  const videoRef = useRef();
  const stepRef = useRef();
  const youtubeRef = useRef();

  const date = new Date();
  useTitleHook();

  useEffect(() => {
    const handleList = async () => {
      const list = await getPlaylists();
      setPlayLists(list);
      youtubeGsap(youtubeRef.current);
    };
    handleList();
    headerGsap(videoRef.current);
    stepGsap(stepRef.current);
    setToday(date.toLocaleDateString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
  };
  return (
    <div>
      <div ref={videoRef} className="video min-h-[calc(100vh-113px)] h-[calc(1080px-113px)] bg-neutral-200 relative overflow-hidden after:absolute after:inset-0 after:bg-black after:opacity-30">
        <video src={me} muted autoPlay loop className="w-full h-full object-cover origin-center"></video>
        <div className="block absolute left-10 bottom-10 bg-lime-200 w-[550px] rounded-2xl p-5 font-[base] z-10 video-copy">
          <h2 className="text-4xl font-bold">
            함께 고민하고
            <br /> 성장하며 실력을 <br />
            쌓아가는 여정
          </h2>
          <p className="text-sm font-light pt-5 break-keep pr-20">
            사수가 없거나, 혼자서 성장하고 계신가요? 혼자 고민하며 막막했던 순간들, 이제는 함께 해결할 수 있습니다. 리베하얀은 실무 경험을 바탕으로 웹 퍼블리싱과 프론트엔드 개발을 배우고자 하는
            분들에게 멘토이자 사수 같은 역할을 해드립니다. 배움의 과정이 외롭지 않도록, 함께 고민하고 성장하며 실력을 쌓아가는 여정을 리베하얀에서 시작하세요.
          </p>
        </div>
      </div>
      <section ref={stepRef} className="h-[1500px] text-center flex items-center justify-center font-[base] relative">
        <h2 className="text-9xl font-[teko] font-extrabold leading-[1] ">
          Learning <br />
          step by step
        </h2>
        <ul>
          <li className="absolute mobile:left-5 mobile:right-5 tablet:right-auto tablet:left-[15%] top-[10%] bg-lime-200 mobile:w-auto tablet:w-[550px] rounded-2xl p-10 font-[base] text-left">
            <h3 className="text-3xl">오프라인강의</h3>
            <div className="pt-5 text-neutral-800 font-light">
              매주 토요일 8시간씩 진행되는 오프라인 강의를 운영 중입니다. 모집은 유튜브를 통해 진행되며, 개강일 약 1개월 전부터 모집이 시작됩니다. 강의는 HTML, CSS 기초부터 시작해 React까지 체계적으로
              구성되었으며, 각 과목은 연간 1~2회만 개설됩니다. 실무 중심의 커리큘럼으로 여러분의 성장을 돕겠습니다. 지금 바로 신청하세요!
            </div>
          </li>
          <li className="absolute mobile:left-5 mobile:right-5 tablet:right-auto tablet:left-[55%] top-[35%] bg-lime-200 mobile:w-auto tablet:w-[550px] rounded-2xl p-10 font-[base] text-left">
            <h3 className="text-3xl">온라인강의</h3>
            <div className="pt-5 text-neutral-800 font-light">
              다양한 플랫폼을 통해 온라인 강의를 판매 중입니다. 강의 판매 후에도 끝이 아닌, 새로운 스펙과 트렌드가 나올 때마다 주기적으로 콘텐츠를 업데이트하여 최신 정보를 제공합니다. 현재는 HTML과
              CSS 강의를 중심으로 운영 중이며, 앞으로 점차 다양한 언어와 기술로 강의를 확대해 나갈 계획입니다. 지속적인 업데이트와 함께 여러분의 성장을 지원하겠습니다.
            </div>
          </li>
          <li className="absolute mobile:left-5 mobile:right-5 tablet:right-auto tablet:left-[10%] top-[60%] bg-lime-200 mobile:w-auto tablet:w-[550px] rounded-2xl p-10 font-[base] text-left">
            <h3 className="text-3xl">유튜브강의</h3>
            <div className="pt-5 text-neutral-800 font-light">
              무료로 공개 중인 유튜브 강의에서는 최신 스펙 정보와 실험적인 UI를 다루며, 온·오프라인 강의의 연장선에서 복습할 수 있는 클론코딩 콘텐츠를 제공합니다. 또한, 웹 접근성과 웹 퍼블리셔 및
              프론트엔드 개발자에게 중요한 다양한 이슈를 깊이 있게 다룹니다. 지속적인 학습과 성장을 위한 유익한 콘텐츠로 여러분을 지원합니다.
            </div>
          </li>
          <li className="absolute mobile:left-5 mobile:right-5 tablet:right-auto tablet:left-[48%] top-[82%] bg-lime-200 mobile:w-auto tablet:w-[550px] rounded-2xl p-10 font-[base] text-left">
            <h3 className="text-3xl">KDT & NCS</h3>
            <div className="pt-5 text-neutral-800 font-light">
              국비지원 과정인 KDT와 NCS 과정에 참여하며, 취업을 목표로 하시는 분들을 위해 A부터 Z까지 꼼꼼하게 가이드하고 있습니다. 긴 시간 동안 체계적인 교육과 함께, 복습 자료 및 영상을 제공하여
              지속적인 성장을 돕습니다. 이를 통해 취업 후 프로젝트에 바로 투입되어도 이질감 없이 적응할 수 있도록 실무 역량을 키워드립니다. 여러분의 성공적인 취업과 커리어를 위한 든든한 지원자가
              되겠습니다.
            </div>
          </li>
        </ul>
      </section>
      <section className="area" style={{ display: "none" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>교육입력</legend>
              <ul>
                <li>
                  <label htmlFor="title">교육명</label>
                  <input type="text" id="title" name="title" className="bg-stone-200" />
                </li>
                <li>
                  <label htmlFor="startDay">시작일</label>
                  <input type="date" id="startDay" name="startDay" min={today} className="bg-stone-200" />
                </li>
                <li>
                  <label htmlFor="endDay">종료일</label>
                  <input type="date" id="endDay" name="endDay" className="bg-stone-200" />
                </li>
                <li>
                  <label htmlFor="company">고객사</label>
                  <input type="text" id="company" name="company" className="bg-stone-200" />
                </li>
              </ul>
              <button type="submit">전송</button>
            </fieldset>
          </form>
        </div>
      </section>
      <section className="area" ref={youtubeRef}>
        <div>
          <h2 className="font-[base] font-bold text-4xl">Youtube 채널 재생목록</h2>
          <p className="h-10"></p>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-x-7 gap-y-10">
            {playLists.map((playlist) => (
              <li key={playlist.id}>
                <a href={playlist.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1">
                  <div>
                    <img src={playlist.thumbnail} alt="" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="flex justify-between">
                    <div className="font-[base] text-lg font-medium text-stone-800">{playlist.title}</div>
                    <div className="font-[base] text-base font-base text-stone-500">{playlist.videoCount}개 영상</div>
                  </div>
                  {/* <div className="font-[base] text-base font-light text-stone-500">{playlist.description}</div> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
