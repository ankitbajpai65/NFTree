import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const ProjectDetails = () => {
  const state = useLocation();
  const { data, page, user } = state.state;
  const navigate = useNavigate();

  console.log(user);

  return (
    <>
      <div className="project-container">
        <div className="form-box projectDetails">
          <div className="detailPage-img">
            <img src={data.image} alt="" />
          </div>
          <div className="detailPage-projectInfo">
            <div className="projectInfo-head">
              <div>
                <h1>{data.name}</h1>
                <span>{`${data.city}, ${data.country}`}</span>
              </div>
              <div>
                <a href={data.document} target="blank">
                  view project documents
                </a>
              </div>
            </div>

            <div>
              <p>{data.description}</p>
            </div>

            <div className="progressBar">
              <div className="progressBar">
                <span></span>
              </div>

              <div style={{ lineHeight: "20px", margin: "2% 0" }}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>Total Plantation Area in Square meter </h5>
                      </td>
                      <td className="space">:</td>
                      <td>{data.area}</td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Donation Cost Per Plant </h5>
                      </td>
                      <td className="space">:</td>
                      <td>{data.donation}</td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Types of Plants </h5>
                      </td>
                      <td className="space">:</td>
                      <td>{data.plant_types}</td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Total Number of Plants Planned </h5>
                      </td>
                      <td className="space">:</td>
                      <td>{data.plant_planned}</td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Total Number of Plants Planted </h5>
                      </td>
                      <td className="space">:</td>
                      <td>{data.plants_planted}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {page == "ongoing" && sessionStorage.getItem("token") && (
                <div className="form-button detailPage-button">
                  {user == "user" && (
                    <div className="projectInfo-head">
                      <button
                        className="contributeButton"
                        onClick={() =>
                          navigate(`${location.pathname}/contribute`, {
                            state: data,
                          })
                        }
                      >
                        Contribute
                      </button>
                      <button
                        className="reportButton"
                        onClick={() => {
                          navigate("/projectreport");
                        }}
                      >
                        Generate Report
                      </button>
                    </div>
                  )}
                  {user == "owner" && (
                    <div className="owner-detailProject">
                      <button
                        className="contributeButton"
                        onClick={() => {
                          navigate(`${location.pathname}/edit`, {
                            state: { data: data },
                          });
                        }}
                      >
                        Edit Project
                      </button>
                      <button
                        className="reportButton"
                        onClick={() => {
                          navigate(`${location.pathname}/edit`, {
                            state: { data: data },
                          });
                        }}
                      >
                        Create Report
                      </button>
                      <button
                        onClick={() => {
                          navigate("/createreport");
                        }}
                      >
                        Users Details
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* image */}
            <div className="detailPage-img plantImageDiv">
              {/* <img src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="plantImage"/> */}
            </div>
            {/* image */}
            <div className="detailPage-owner">
              <p>Project Owner Details</p>
              <div className="detailPage-ownerDetails">
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <h5>Name </h5>
                        </td>
                        <td className="space">:</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Email </h5>
                        </td>
                        <td className="space">:</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Address </h5>
                        </td>
                        <td className="space">:</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Name of Organization </h5>
                        </td>
                        <td className="space">:</td>
                        <td>{}</td>
                      </tr>
                    </tbody>

                    <tbody>
                      <tr>
                        <td>
                          <h5>Country </h5>
                        </td>
                        <td className="space">:</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Website </h5>
                        </td>
                        <td className="space">:</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Designation </h5>
                        </td>
                        <td className="space">:</td>
                        <td>{}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
