import React, { useState } from "react";
import { projects } from "../data/portfolio";
import { useTitleHook } from "../utils/useTitleHook";

const options = () => {
  const result = projects.map((item) => {
    return item.startDate.slice(0, 4);
  });
  return [...new Set(result)];
};

export default function Portfolio() {
  const optionList = options();
  const [detailID, setDetailID] = useState();
  const [toggleList, setToggleList] = useState(false);

  const handleDetail = (id) => {
    setDetailID((prevID) => (prevID === id ? prevID : id));
    setToggleList((prev) => (prev === id ? !prev : true));
  };

  const selectedProject = projects.find((item) => item.id === detailID);
  useTitleHook();
  return (
    <main className="portfolio">
      <div className="area">
        <form action="">
          <fieldset className="grid grid-cols-[min-content_min-content_min-content_1fr] gap-2 items-center">
            <legend className="hidden">포트폴리오 검색</legend>
            <input type="search" name="" id="" className="w-70 h-10" placeholder="search" title="포트폴리오 검색" />
            <strong className="whitespace-nowrap">연도선택</strong>
            <div className="flex gap-3">
              {optionList.map((year) => (
                <button type="button" key={year} className="cursor-pointer">
                  {year}
                </button>
              ))}
            </div>
            <div className="results justify-self-end">Total {projects.length} Projects</div>
          </fieldset>
        </form>
      </div>
      <div className="area">
        <div className={`portfolio-wrap ${toggleList ? "show" : ""}`}>
          <ul className="font-[base] font-light">
            {projects.slice(0, 15).map(({ id, name, startDate, endDate, client, company, tag, contribution, url }, index) => (
              <li key={id} className={index === 0 ? "border-t-0" : "border-t-[1px] border-gray-300"}>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    handleDetail(id);
                  }}
                  role="button"
                  className="grid grid-cols-[1fr_minmax(min-content,7vw)_minmax(8rem,10vw)] gap-4 items-center py-4 px-2 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="text-gray-700 font-medium">
                    {name}
                    <div className="mt-[1px] flex gap-1">
                      {tag.map(({ role, className, language }, index) => (
                        <React.Fragment key={index}>
                          {role && <span className={className}>{role}</span>}
                          {language && <span className={className}>{language}</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-700 text-sm">{startDate}</div>
                  <div className="text-gray-700 text-sm whitespace-nowrap">{client}</div>
                </a>
              </li>
            ))}
          </ul>
          {selectedProject && (
            <div className={`detail-view ${toggleList ? "show" : ""}`}>
              <h2 className="text-lg font-semibold">{selectedProject.name}</h2>
              <p>
                <strong>기간:</strong> {selectedProject.startDate} ~ {selectedProject.endDate}
              </p>
              <p>
                <strong>클라이언트:</strong> {selectedProject.client}
              </p>
              <p>
                <strong>회사:</strong> {selectedProject.company}
              </p>
              <p>
                <strong>기여도:</strong> {selectedProject.contribution}
              </p>
              {selectedProject.url && (
                <p>
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    프로젝트 링크
                  </a>
                </p>
              )}
              <button type="button" className="absolute right-5 top-5 cursor-pointer" onClick={() => setToggleList(false)}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
