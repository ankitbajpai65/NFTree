import React, { useEffect, useState } from "react";
import { projectList } from "../../../api/projectApi";
import { useNavigate } from "react-router-dom";

export default function MyProjects() {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("id");

  const [data, setData] = useState([]);

  useEffect(() => {
    const projectListData = async () => {
      const response = await projectList();
      setData(response);
    };

    projectListData();
  }, []);

  const handleProject = (project) => {
    navigate(`/projectDetails/${project.name}`, {
      state: { data: project, user: "owner" },
    });
  };

  return (
    <>
      <div className="Container">
        <h3>My Projects</h3>

        <div className="projectList">
          {data
            .filter((project) => project.user == userId)
            .map((project) => (
              <div className="counter" key={project.id}>
                <li onClick={() => handleProject(project)}>
                  <div className="projectIcon">
                    <img src={project.image} alt="" />
                  </div>
                  <div className="myProjectContent">
                    <h4>{project.name}</h4>
                    <p style={{ height: "63px" }}>
                      {project.description.length > 150
                        ? `${project.description.substring(0, 150)}...`
                        : project.description}
                    </p>
                  </div>
                  <div className="myProjectStatus">
                    <p> {project.is_completed ? "Completed" : "Ongoing"}</p>
                  </div>
                </li>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
