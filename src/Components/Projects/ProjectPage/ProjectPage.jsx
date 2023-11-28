import "./Projects.css";
import { useState, useEffect } from "react";
import { projectList } from "../../../api/projectApi";
import { useNavigate, useLocation } from "react-router-dom";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

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

  return (
    <>
      <div className="project-container" style={{ minHeight: "100vh" }}>
        <div className="projectHead">
          <h1> {props == "ongoing" ? "Ongoing " : "Completed "} Projects</h1>
        </div>

        <div className="projectSearch">
          <input
            type="text"
            placeholder="Search Project"
            onChange={handleSearch}
          />
          <FormControl className="filterBtn">
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Mumbai</MenuItem>
              <MenuItem>Kolkata</MenuItem>
              <MenuItem>Chennai</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="projectContent">
          {filterData
            .filter(
              (key) => key.is_completed == (props == "ongoing" ? false : true)
            )
            .map((project) => (
              <div
                className="box"
                key={project.id}
                onClick={() =>
                  navigate(`${location.pathname}/${project.name}`, {
                    state: { data: project, page: props, user: "user" },
                  })
                }
              >
                <img src={project.image} alt="" />
                <h4>{project.name}</h4>
                <span>{project.location}</span>
                <p>
                  {project.description.length > 100
                    ? `${project.description.substring(0, 100)}...`
                    : project.description}
                </p>

                <div className="donateBtn">
                  {/* <p>₹{project.donation}/plant</p> */}
                  {/* <p></p> */}
                  {props == "ongoing" && <button>Donate</button>}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
