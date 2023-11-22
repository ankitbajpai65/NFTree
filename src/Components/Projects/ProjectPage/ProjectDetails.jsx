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
            <div style={{ height: "8%", minHeight: "70px" }}>
              <h1>{data.name}</h1>
              <span>{`${data.city}, ${data.country}`}</span>
            </div>

            <div style={{ minHeight: "30%" }}>
              <p>{data.description}</p>
            </div>

            <div className="progressBar" style={{ marginBottom: "20px" }}>
              <span></span>
            </div>

            <div style={{ height: "30%" }}>
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
                  <button
                    onClick={() =>
                      navigate(`${location.pathname}/contribute`, {
                        state: data.donation,
                      })
                    }
                  >
                    Contribute
                  </button>
                )}
                {user == "owner" && (
                  <div className="">
                    <button>Edit Project</button>
                    <button>Generate Report</button>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* image */}
          <div className="detailPage-img"></div>
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
    </>
  );
};

export default ProjectDetails;
