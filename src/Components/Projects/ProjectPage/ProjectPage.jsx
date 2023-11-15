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
      <div className="project-container" style={{ minHeight: "100vh" }}>
        <div className="projectHead">
          <h1> {props == "ongoing" ? "Ongoing " : "Completed "} Projects</h1>
        </div>

        <div className="projectSearch">
          <input type="text" placeholder="Search Project" />
          <FormControl className="filterBtn">
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Delhi</MenuItem>
              <MenuItem value={20}>Mumbai</MenuItem>
              <MenuItem value={30}>Kolkata</MenuItem>
              <MenuItem value={30}>Chennai</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="projectContent">
          {data
            .filter(
              (key) => key.is_completed == (props == "ongoing" ? false : true)
            )
            .map((project) => (
              <div
                className="box"
                key={project.id}
                onClick={() =>
                  navigate(`${location.pathname}/${project.name}`, {
                    state: { data: project, page: props },
                  })
                }
              >
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
                  {props == "ongoing" && <button>Donate</button>}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
