import "./Projects.css";
import { useState, useEffect } from "react";
import { projectList } from "../../../api/projectApi";
import { useNavigate, useLocation } from "react-router-dom";

export default function ProjectPage({ props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const projectListData = async () => {
      const response = await projectList();

      setData(response);
      setFilterData(response);
    };

    projectListData();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const newData = data.filter((project) =>
      project.name.toLowerCase().includes(searchTerm)
    );
    setFilterData(newData);
  };

  const handleFilter = (e) => {
    const selectedFilter = e.target.value;

    let filteredProjects = [];

    switch (selectedFilter) {
      case 'all':
        filteredProjects = data;
        break;
      case 'donating':
        filteredProjects = data.filter(project => project.donation !== null && project.donation !== "");
        break;
      case 'monitoring':
        filteredProjects = data.filter(project => !project.donation || project.donation === "");
        break;
      case 'ongoing':
        filteredProjects = data.filter(project => !project.is_completed);
        break;
      case 'completed':
        filteredProjects = data.filter(project => project.is_completed);
        break;
      default:
        break;
    }
    
    setFilterData(filteredProjects);
  };


  return (
    <>
      <div className="project-container" style={{ minHeight: "100vh" }}>
        <div className="projectHead">
          <h1>Projects</h1>
        </div>

        <div className="projectSearch">
          <input
            type="text"
            placeholder="Search Project"
            onChange={handleSearch}
          />
          <select name="filter" id="filter" className="filterBtn" onChange={handleFilter}>
            <option value="all" selected defaultValue disabled>
              Filter
            </option>
            <option value="all">All</option>
            <option value="donating">Donating Projects</option>
            <option value="monitoring">Monitoring Projects</option>
            <option value="ongoing">Ongoing Projects</option>
            <option value="completed">Completed Projects</option>
          </select>
        </div>

        {filterData.length > 0 ? (
          <div className="projectContent">
            {
              filterData.map((project) => (
                <div
                  className="box"
                  key={project.id}
                  onClick={() =>
                    navigate(`${location.pathname}/${project.name}`, {
                      state: { data: project, user: "user" },
                    })
                  }
                >
                  <img src={project.image} alt="" />
                  <h4>{project.name}</h4>
                  <p style={{ height: "65px" }}>
                    {project.description.length > 100
                      ? `${project.description.substring(0, 100)}...`
                      : project.description}
                  </p>
                  <div className="donateBtn">
                    <button>Donate</button>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <>
            <div className="messageDiv">
              <h1>No data found</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}
