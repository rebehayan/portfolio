import React, { useState } from "react";
import { projects } from "../../data/portfolio";

const options = () => {
  const result = projects.map((item) => {
    return item.startDate.slice(0, 4);
  });
  return [...new Set(result)].sort((a, b) => b - a);
};
export default function PortfolioSearch({ handleYear, handleSearch }) {
  const optionList = options();
  const [selectedYear, setSelectedYear] = useState("전체보기");

  const handleClick = (year) => {
    handleYear(year);
    setSelectedYear(year);
  };

  return (
    <form onSubmit={handleSearch}>
      <fieldset className="grid grid-cols-[min-content_min-content_1fr] gap-2 items-center">
        <legend className="hidden">포트폴리오 검색</legend>
        <input type="search" name="search" className="outline-0 focus:bg-stone-100 transition-all duration-500 px-3 w-70 self-stretch h-full text-xl" placeholder="Search" title="포트폴리오 검색" />
        <div className="grid grid-cols-10 gap-x-1 gap-y-1 w-[50rem]">
          <button
            type="button"
            onClick={(e) => handleClick("전체보기")}
            className={`cursor-pointer whitespace-nowrap row-start-1 row-end-4 border-[1px] border-zinc-700  ${selectedYear === "전체보기" ? "bg-zinc-700 text-white" : ""}`}
          >
            전체보기
          </button>
          {optionList.map((year) => (
            <button type="button" key={year} onClick={() => handleClick(year)} className={`cursor-pointer border-[1px] border-zinc-700 ${selectedYear === year ? "bg-zinc-700 text-white" : ""}`}>
              {year}
            </button>
          ))}
        </div>
        <div className="results justify-self-end self-end">
          총 <strong>{projects.length}</strong> 프로젝트
        </div>
      </fieldset>
    </form>
  );
}
