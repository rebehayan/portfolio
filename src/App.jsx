import { useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Visual from "./components/main/Visual";
import Introduce from "./components/main/Introduce";
import Service from "./components/main/Service";
import image from "./assets/visual.jpg";
import { FaQuoteRight } from "react-icons/fa";
import SNS from "./components/SNS";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef();
  const triggerRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        position: "static",
        left: 0,
        top: 0,
        right: 0,
        zIndex: 1000,
      },
      {
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        backgroundColor: "#fff",
        zIndex: 1000,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <Visual ref={triggerRef} />
      <Introduce />
      <Service />
      <div className="area aa">
        <div>
          <img src={image} alt="" className="w-full object-cover aspect-video" />
        </div>
      </div>
      <section className="area">
        <div>
          <h2 className=" mobile:text-3xl tablet:text-6xl font-[base] font-bold">
            완성도 높은 프로젝트,
            <br />
            그리고 함께한 사람들의 솔직한 이야기
          </h2>
          <ul className="grid  mobile:grid-cols-[auto-fit_minmax(8rem,1fr)] tablet:grid-cols-5 border-t-[1px] border-l-[1px] border-gray-200 text-center mt-10">
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
            <li className="p-8 border-r-[1px] border-b-[1px] border-gray-200">Samsung</li>
          </ul>
          <div className="text-center mt-20">
            <FaQuoteRight className="mx-auto w-10 h-10" />
            <p className="font-[base] font-light text-gray-600 my-5 mobile:text-lg tablet:text-xl">
              모든 프로젝트는 단순한 결과물이 아니라, 문제를 해결하고 새로운 가치를 창출하는 과정입니다. <br />
              나와 함께한 개발자, 디자이너, 그리고 협업 파트너들의 피드백이야말로
              <br />
              프로젝트의 성공을 증명하는 가장 강력한 이야기입니다.
              <br />
              디자인과 기능, 사용자 경험까지 균형을 맞춘 프로젝트가 어떻게 완성되었는지,
              <br />
              그리고 어떤 영향을 주었는지 직접 확인해보세요.
            </p>
            <div className="text-left w-min whitespace-nowrap mx-auto">
              Rebehayan
              <br />
              Web Publisher / FE Developer
            </div>
          </div>
        </div>
      </section>
      <section className="area">
        <div>
          <h2 className="text-center text-3xl font-[teko] font-bold uppercase mb-6">🖐OpenTalk</h2>
          <p className="font-[teko] mobile:text-7xl tablet:text-[10rem] uppercase font-extrabold leading-[0.8] text-center tablet:w-[50vw] mx-auto">Would you like to talk with me?</p>
          <div className="text-center">
            <a
              href="https://open.kakao.com/o/gOT0rthe"
              target="_blank"
              className="mobile:text-md tablet:text-xl transition-all duration-700 hover:text-amber-500 font-[base] underline underline-offset-4"
            >
              카카오톡 오픈톡 바로가기
            </a>
          </div>
        </div>
      </section>
      <footer className="area">
        <div className="mobile:grid tablet:flex mobile:justify-center tablet:justify-between items-center">
          <span className="font-[teko] text-xl leading-[1] mobile:text-center tablet:text-left">&copy; 2000-2025 Rebehayan</span>
          <SNS className={"flex gap-0.5 leading-0"} />
        </div>
      </footer>
    </>
  );
}

export default App;
