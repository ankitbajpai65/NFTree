import "./OngoingProject.css";
import data from "../data";
import { useState } from "react";

export default function OngoingProject() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;

  return (
    <>
      <div className="project-container">
        <div className="projectHead">
          <h1>Ongoing Projects</h1>
        </div>
        <div className="projectSearch">
          <input type="text" placeholder="Search Project" />
        </div>
        <div className="projectContent">
          {data.slice(firstPostIndex, lastPostIndex).map((project) => (
            <div className="box">
              <img src={project.image} alt="" />
              <h4>{project.projectName}</h4>
              <span>{project.location}</span>
              <p>{project.projectDescription}</p>
              <div className="donateBtn">
                <p>₹{project.cost}/plant</p>
                <button>Donate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
