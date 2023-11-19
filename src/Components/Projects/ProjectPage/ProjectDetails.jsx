import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const ProjectDetails = () => {
  const state = useLocation();
  const { data, page } = state.state;
  const navigate = useNavigate();

  console.log(sessionStorage.getItem("token"));

  return (
    <>
      <div className="project-container">
        <div className="form-box projectDetails">
          <div className="detailPage-img">
            <img src={data.image} alt="" />
          </div>
          <div className="detailPage-projectInfo">
            <div style={{ height: "15%" }}>
              <h1>{data.name}</h1>
              <span>{`${data.city}, ${data.country}`}</span>
            </div>

            <div style={{ minHeight: "200px" }}>
              <p>{data.description}</p>
            </div>

            <div style={{ height: "25%" }}>
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
                      <h5>Total Number of Plants planned </h5>
                    </td>
                    <td className="space">:</td>
                    <td>{data.plant_planned}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {page == "ongoing" && sessionStorage.getItem("token") && (
              <div
                className="form-button detailPage-button"
                onClick={() => navigate(`${location.pathname}/contribute`)}
              >
                <button>Contribute</button>
              </div>
            )}
          </div>
          <div className="detailPage-owner">
            <p>Project Owner Details</p>
            <div className="detailPage-ownerDetails">
              <div style={{ height: "25%" }}>
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
                </table>
              </div>
              <div style={{ height: "25%" }}>
                <table>
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
