import React, { useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";
import gsap from "gsap";

const listAnimation = (selector) => {
  gsap.fromTo(
    selector.querySelectorAll("li"),
    {
      x: 40,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "back.inOut",
    }
  );
};

export default function PortfolioList({ projectList, handleGetID }) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 10;
  const totalPages = Math.ceil(projectList.length / projectPerPage);
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

  const listRef = useRef();

  useEffect(() => {
    listAnimation(listRef.current);
  }, [indexOfFirstProject]);

  return (
    <div>
      <ul className="font-[base] font-light" ref={listRef}>
        {currentProjects.map(({ id, name, startDate, client, tag }, index) => (
          <li key={id} className={index === 0 ? "border-t-0" : "border-t-[1px] border-gray-300"}>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleGetID(id);
              }}
              role="button"
              className="grid tablet:grid-cols-[50px_3fr_2fr_1fr_1fr] gap-4 items-center py-10 px-5"
            >
              <div className="text-neutral-500 dark:text-stone-400 font-light font-[base] text-lg">{projectList.length - index - indexOfFirstProject}</div>
              <div className="text-neutral-800 dark:text-white font-[base] text-3xl font-normal whitespace-nowrap mobile:row-start-2 mobile:row-end-3 mobile:col-start-1 mobile:col-end-3 tablet:col-auto tablet:row-auto">
                {name}
              </div>
              <div className="mt-[1px] flex gap-1 mobile:col-start-2 mobile:col-end-3 tablet:col-auto mobile:justify-end tablet:justify-center">
                {tag.map(({ role, className, language }, index) => (
                  <React.Fragment key={index}>
                    {role && <span className={className}>{role}</span>}
                    {language && <span className={className}>{language}</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="dark:text-stone-400 text-stone-600 text-sm">{startDate}</div>
              <div className="dark:text-stone-400 text-stone-600 text-sm whitespace-nowrap mobile:col-start-2 mobile:col-end-3 tablet:col-auto mobile:justify-end tablet:justify-center">{client}</div>
            </a>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} onPageChange={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}
// https://crowdytheme.com/html/arolax/creative-agency.html
