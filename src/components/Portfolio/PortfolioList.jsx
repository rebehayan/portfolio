import React, { useState } from "react";
import Pagination from "./Pagination";

export default function PortfolioList({ projectList, handleGetID }) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 10;
  const totalPages = Math.ceil(projectList.length / projectPerPage);
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div>
      <ul className="font-[base] font-light">
        {currentProjects.map(({ id, name, startDate, client, tag }, index) => (
          // <li key={id} className={index === 0 ? "border-t-0" : "border-t-[1px] border-gray-300 hover:scale-[1.02] transition-transform duration-200"}>
          <li key={id} className={index === 0 ? "border-t-0" : "border-t-[1px] border-gray-300"}>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleGetID(id);
              }}
              role="button"
              className="grid grid-cols-[50px_3fr_2fr_1fr_1fr] gap-4 items-center py-10 px-5"
            >
              <div className="text-neutral-500 dark:text-stone-400 font-light font-[base] text-lg">{projectList.length - index - indexOfFirstProject}</div>
              <div className="text-neutral-800 dark:text-white font-[base] text-3xl font-normal whitespace-nowrap">{name}</div>
              <div className="mt-[1px] flex gap-1">
                {tag.map(({ role, className, language }, index) => (
                  <React.Fragment key={index}>
                    {role && <span className={className}>{role}</span>}
                    {language && <span className={className}>{language}</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="dark:text-stone-400 text-stone-600 text-sm">{startDate}</div>
              <div className="dark:text-stone-400 text-stone-600 text-sm whitespace-nowrap">{client}</div>
            </a>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} onPageChange={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}
// https://crowdytheme.com/html/arolax/creative-agency.html
