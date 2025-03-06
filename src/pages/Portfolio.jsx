import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/portfolio";
import { useTitleHook } from "../utils/useTitleHook";
import PortfolioDetail from "../components/Portfolio/PortfolioDetail";
import PortfolioList from "../components/Portfolio/PortfolioList";
import PortfolioSearch from "../components/Portfolio/PortfolioSearch";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import gsap from "gsap";

const gsapTimeline = (selector) => {
  gsap
    .timeline()
    .fromTo(
      selector.querySelector(".header h2"),
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "back.inOut",
      }
    )
    .fromTo(
      selector.querySelector(".header div"),
      {
        x: 20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "back.inOut",
      },
      "-=0.2"
    )
    .fromTo(
      selector.querySelector(".portfolio__search"),
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
      "-=0.2"
    )
    .fromTo(
      selector.querySelector(".portfolio__list"),
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
      "-=0.2"
    );
};

export default function Portfolio() {
  const [detailID, setDetailID] = useState();
  const [filterDataList, setFilterDataList] = useState(projects);
  const [isKeyword, setIsKeyword] = useState("");
  const dialog = useRef();
  const wrapRef = useRef();

  const handleGetID = (id) => {
    setDetailID((prevID) => (prevID === id ? prevID : id));
    dialog.current.showModal();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const getKeyword = formData.get("search").trim();
    setIsKeyword(getKeyword);

    handleYear(undefined, getKeyword); // 최신 검색어를 바로 전달
  };

  const handleYear = (getYear = "전체보기", keyword = isKeyword) => {
    const filterYear = getYear != "전체보기" ? projects.filter((item) => item.startDate.slice(0, 4) === getYear) : projects;
    const searchKeyword = keyword ? filterYear.filter((item) => item.name.includes(keyword)) : filterYear;

    setFilterDataList((prevFilter) => (prevFilter === searchKeyword ? prevFilter : searchKeyword));
  };

  const selectedProject = projects.find((item) => item.id === detailID);
  useTitleHook();

  useEffect(() => {
    handleYear();
    gsapTimeline(wrapRef.current);
  }, [isKeyword]);

  return (
    <>
      <div className="portfolio dark:bg-neutral-950 z-10 relative" ref={wrapRef}>
        <div className="area  dark:bg-white">
          <div className="flex justify-between items-end header">
            <h2 className="font-[teko] mobile:text-4xl tablet:text-7xl font-extrabold text-pretty mobile:w-full tablet:w-96 uppercase leading-[0.8]">Project Portfolio</h2>
            <div className="font-[base] w-100 break-keep justify-self-end text">
              점점 발전하는 코드로 전문성을 강화하며,
              <br /> 프로젝트 규모와 관계없이 일관된 퍼포먼스를 제공합니다.
              <div className="mt-5">
                <Link to="/contact" className="btn-goto">
                  <span data-text="프로젝트 의뢰하기">프로젝트 의뢰하기</span>
                  <HiArrowLongRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="portfolio__search">
            <PortfolioSearch handleYear={(year) => handleYear(year)} handleSearch={handleSearch} />
          </div>
        </div>
        <div className="area portfolio__list">
          <div className={`portfolio-wrap`}>
            <PortfolioList projectList={filterDataList} handleGetID={(id) => handleGetID(id)} />
            <PortfolioDetail projectInfo={selectedProject} ref={dialog} />
          </div>
        </div>
      </div>
    </>
  );
}
