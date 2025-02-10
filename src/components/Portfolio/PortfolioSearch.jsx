import React, { useState } from "react";
import { projects } from "../../data/portfolio";

const options = () => {
  const result = projects.map((item) => {
    return item.startDate.slice(0, 4);
  });
  return [...new Set(result)];
};
export default function PortfolioSearch({ handleYear }) {
  const optionList = options();
  const [selectedYear, setSelectedYear] = useState("전체보기");

  const handleClick = (year) => {
    handleYear(year);
    setSelectedYear(year);
  };

  return (
    <form>
      <fieldset className="grid grid-cols-[min-content_min-content_min-content_1fr] gap-2 items-center">
        <legend className="hidden">포트폴리오 검색</legend>
        <input type="search" name="" id="" className="w-70 h-10" placeholder="search" title="포트폴리오 검색" />
        <strong className="whitespace-nowrap">연도선택</strong>
        <div className="flex gap-3">
          <button type="button" onClick={(e) => handleClick(e.target.textContent)} className={`cursor-pointer whitespace-nowrap ${selectedYear === "전체보기" ? "text-emerald-600 font-bold" : ""}`}>
            전체보기
          </button>
          {optionList.map((year) => (
            <button type="button" key={year} onClick={() => handleClick(year)} className={`cursor-pointer ${selectedYear === year ? "text-emerald-600 font-bold" : ""}`}>
              {year}
            </button>
          ))}
        </div>
        <div className="results justify-self-end">
          총 <strong>{projects.length}</strong> 프로젝트
        </div>
      </fieldset>
    </form>
  );
}
