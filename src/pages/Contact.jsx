import React, { useEffect, useRef } from "react";
import { Email } from "../components/Email";
import { useTitleHook } from "../utils/useTitleHook";
import liveVideo from "../assets/contact.mp4";
import myFav1 from "../assets/myfav1.jpg";
import myFav2 from "../assets/myfav2.png";
import myFav3 from "../assets/myfav3.png";
import myFav4 from "../assets/myfav4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroAni = (selector) => {
  const ani = gsap
    .timeline()
    .fromTo(
      selector.querySelector("h2"),
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    )
    .fromTo(
      selector.querySelectorAll(".list div"),
      {
        height: 0,
        opacity: 0,
      },
      {
        height: "auto",
        opacity: 1,
        stagger: 0.4,
        duration: 1,
      }
    )
    .fromTo(
      selector.querySelectorAll(".list img"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      }
    );

  ScrollTrigger.create({
    trigger: selector,
    start: "top center",
    animation: ani,
  });
};
const videoAni = (selector) => {
  const ani = gsap
    .timeline()
    .fromTo(
      selector.querySelector(".contact-video"),
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
      }
    )
    .fromTo(
      selector.querySelector(".contact-video video"),
      {
        height: 0,
        opacity: 0,
      },
      {
        height: "100%",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=1"
    );

  ScrollTrigger.create({
    trigger: selector,
    start: "center 80%",
    animation: ani,
  });
};
const contactAni = (selector) => {
  const ani = gsap
    .timeline()
    .fromTo(
      selector.querySelector(".contact-form h2"),
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    )
    .fromTo(
      selector.querySelector(".contact-form ul"),
      {
        width: 0,
      },
      {
        width: "auto",
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.5"
    )
    .fromTo(
      selector.querySelectorAll(".contact-form li"),
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      "-=0.5"
    )
    .fromTo(
      selector.querySelectorAll(".contact-form-area"),
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      "-=1"
    );

  ScrollTrigger.create({
    trigger: selector,
    start: "70% center",
    animation: ani,
  });
};

const aniGsap = (selector) => {
  heroAni(selector.querySelector(".contact-hero"));
  videoAni(selector);
  contactAni(selector);
};

export default function Contact() {
  const wrapRef = useRef();

  useEffect(() => {
    aniGsap(wrapRef.current);
  }, []);

  useTitleHook();

  return (
    <div className="mt-[-113px]" ref={wrapRef}>
      <section className="pt-40 pb-5 grid mobile:grid-cols-1 tablet:grid-cols-2 gap-20 tablet:h-dvh contact-hero">
        <h2 className="font-[base] mobile:text-2xl tablet:text-6xl font-light mobile:px-3 tablet:px-0 mobile:justify-self-start tablet:justify-self-end self-center leading-[1.2]">
          궁금한 점이 있으신가요? <br /> <strong className="font-bold">강의 의뢰</strong>나 <strong className="font-bold">프로젝트 문의</strong>도 <br /> 언제든지 환영합니다. <br /> 편하게 문의하세요!
        </h2>
        <div className=" tablet:grid grid-cols-[1fr_2fr] gap-5 grid-rows-4 list">
          <div className="mobile:hidden tablet:block bg-gray-200 col-start-1 col-end-2 row-start-2 row-end-4">
            <img src={myFav1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mobile:hidden tablet:block bg-gray-200 col-start-1 col-end-2 row-start-4 row-end-5">
            <img src={myFav4} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 col-start-2 col-end-3 row-start-1 row-end-3">
            <img src={myFav3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mobile:hidden tablet:block bg-gray-200 col-start-2 col-end-3 row-start-3 row-end-5">
            <img src={myFav2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <div className="h-[50vh] mobile:hidden tablet:flex items-center relative bg-slate-100 overflow-hidden after:absolute after:inset-0 after:bg-black after:opacity-60 after:z-20 contact-video">
        <video src={liveVideo} loop autoPlay muted className="w-full object-cover"></video>
      </div>
      <section className="area contact-form">
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2">
          <div className="font-[base] font-light">
            <h2>
              무엇이 필요하신가요?
              <br /> 언제든 편하게 문의해주세요!
            </h2>
            <ul className="mt-6 mobile:grid tablet:inline-grid gap-6 border-t-[1px] border-gray-300 pt-6 text-sm">
              <li>
                <a href="" className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 24 24" fill="#FEE500">
                    <path
                      fill="currentColor"
                      d="M12 3c5.8 0 10.501 3.664 10.501 8.185c0 4.52-4.701 8.184-10.5 8.184a13.51 13.51 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866c0-4.52 4.7-8.185 10.5-8.185Zm5.908 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.472.472 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413l1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155Zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944Zm-5.857-1.091l.696-1.708l.638 1.707H9.093Zm2.523.487l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474a.696.696 0 0 0-.653.447l-1.662 4.075a.472.472 0 0 0 .874.357l.332-.813h2.07l.298.8a.472.472 0 1 0 .884-.33l-.345-.926ZM8.294 9.302a.472.472 0 0 0-.471-.472H4.578a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14a.472.472 0 0 0 .472-.472Z"
                    />
                  </svg>
                  <span className="leading-[1]">
                    카카오톡 플러스
                    <br /> <strong className="font-bold">1:1대화</strong> 바로가기
                  </span>
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 24 24" fill="#FEE500">
                    <path
                      fill="currentColor"
                      d="M12 3c5.8 0 10.501 3.664 10.501 8.185c0 4.52-4.701 8.184-10.5 8.184a13.51 13.51 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866c0-4.52 4.7-8.185 10.5-8.185Zm5.908 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.472.472 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413l1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155Zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944Zm-5.857-1.091l.696-1.708l.638 1.707H9.093Zm2.523.487l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474a.696.696 0 0 0-.653.447l-1.662 4.075a.472.472 0 0 0 .874.357l.332-.813h2.07l.298.8a.472.472 0 1 0 .884-.33l-.345-.926ZM8.294 9.302a.472.472 0 0 0-.471-.472H4.578a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14a.472.472 0 0 0 .472-.472Z"
                    />
                  </svg>
                  <span className="leading-[1]">
                    카카오톡 오픈토크
                    <br />
                    구독자분들과 단톡에 참여하세요.
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:rebehayan@gmail.com" className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 256 193">
                    <path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" />
                    <path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z" />
                    <path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" />
                    <path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" />
                    <path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z" />
                  </svg>
                  <span className="leading-[1]">
                    이메일
                    <br /> rebehayan@gmail.com
                  </span>
                </a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </li>
            </ul>
          </div>
          <div className="contact-form-area mobile:mt-7 tablet:mt-0">
            <Email />
          </div>
        </div>
      </section>
    </div>
  );
}
