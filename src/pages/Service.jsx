import React, { useEffect, useRef } from "react";
import snippet from "../assets/img_snippet.png";
import movie from "../assets/img_movie.png";
import gsap from "gsap";
import { useTitleHook } from "../utils/useTitleHook";

const aniGsap = (selector) => {
  gsap
    .timeline()
    .fromTo(
      selector.querySelector("h2"),
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    )
    .fromTo(
      selector.querySelectorAll("li a > *"),
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      },
      "<"
    );
};

export default function Service() {
  const appRef = useRef();
  useTitleHook();
  useEffect(() => {
    aniGsap(appRef.current);
  }, []);

  return (
    <section className="area" ref={appRef}>
      <div>
        <h2 className="font-[base] text-3xl font-bold">현재 제공하고 있는 어플리케이션</h2>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-7 mt-5">
          <li>
            <a href="https://movie-js-nine.vercel.app/" target="_blank" className="grid gap-2">
              <img src={movie} alt="" className="w-full" />
              <strong className="font-[teko] text-3xl font-light">Search Movies</strong>
              <p className="font-[base] font-light text-sm text-stone-600">
                Javascript와 omdb API를 기반으로 제작한 간단한 영화 검색웹사이트로 해당 사이트는 오프라인 강의 자료로서 활용되고 있으며 검색 기능, 영화 상세 정보 제공, 즐겨찾기 등을 제공하고 있습니다.
              </p>
            </a>
          </li>
          <li>
            <a href="https://rebehayan.github.io/snippet/" target="_blank" className="grid gap-2">
              <img src={snippet} alt="" className="w-full" />
              <strong className="font-[teko] text-3xl font-light">VSCode Snippet Generator</strong>
              <p className="font-[base] font-light text-sm text-stone-600">
                VSCode에서 사용할 JSON 스니펫을 쉽게 생성하는 도구입니다. 자동 완성 기능을 활용하여 빠르게 코드를 작성하고 생산성을 높이세요!
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
