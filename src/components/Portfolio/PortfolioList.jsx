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
          <li key={id} className={index === 0 ? "border-t-0" : "border-t-[1px] border-gray-300"}>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleGetID(id);
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
      <Pagination totalPages={totalPages} onPageChange={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}
