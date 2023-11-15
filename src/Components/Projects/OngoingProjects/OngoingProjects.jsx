import "./Projects.css";
import { useState, useEffect } from "react";
import { projectList } from "../../../api/projectApi";

export default function OngoingProject() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;

  const [data, setData] = useState([]);
  useEffect(() => {
    const projectListData = async () => {
      const response = await projectList();
      setData(response);
      console.log(data);
    };

    projectListData();
  }, []);

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
          {data.map((project) => (
            <div className="box">
              <img src={project.image} alt="" />
              <h4>{project.name}</h4>
              <span>{project.location}</span>
              <p style={{ height: "63px" }}>
                {project.description.length > 100
                  ? `${project.description.substring(0, 100)}...`
                  : project.description}
              </p>
              <div className="donateBtn">
                {/* <p>₹{project.donation}/plant</p> */}
                {/* <p></p> */}
                <button>Donate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
