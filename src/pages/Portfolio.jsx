import React, { useState } from "react";
import { projects } from "../data/portfolio";
import { useTitleHook } from "../utils/useTitleHook";
import PortfolioDetail from "../components/Portfolio/PortfolioDetail";
import PortfolioList from "../components/Portfolio/PortfolioList";
import PortfolioSearch from "../components/Portfolio/PortfolioSearch";

export default function Portfolio() {
  const [detailID, setDetailID] = useState();
  const [toggleList, setToggleList] = useState(false);
  const [filterDataList, setFilterDataList] = useState(projects);

  const handleGetID = (id) => {
    setDetailID((prevID) => (prevID === id ? prevID : id));
    setToggleList((prev) => (prev === id ? !prev : true));
  };

  const handleYear = (getYear) => {
    const filterYear = getYear != "전체보기" ? projects.filter((item) => item.startDate.slice(0, 4) === getYear) : projects;
    setFilterDataList((prevFilter) => (prevFilter === filterYear ? prevFilter : filterYear));
  };

  const selectedProject = projects.find((item) => item.id === detailID);
  useTitleHook();
  return (
    <main className="portfolio">
      <div className="area">
        <PortfolioSearch handleYear={(year) => handleYear(year)} />
      </div>
      <div className="area">
        <div className={`portfolio-wrap ${toggleList ? "show" : ""}`}>
          <PortfolioList projectList={filterDataList} handleGetID={(id) => handleGetID(id)} />
          {selectedProject && <PortfolioDetail toggle={toggleList} projectInfo={selectedProject} onClose={() => setToggleList(false)} />}
        </div>
      </div>
    </main>
  );
}
