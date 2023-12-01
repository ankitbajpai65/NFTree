import React from "react";
import "./CreateProject.css";
import CreateProjectPage from "./CreateProjectPage";
import { useNavigate, useLocation } from "react-router-dom";

export default function CreateProjectOption() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="form-container" style={{ minHeight: "700px" }}>
      <div className="form-box">
        <h1 className="formHead">
          Please Select Type of Project You Want to Create
        </h1>

        <div className="projectTypeInfo">
          <ol>
            <li>
              <b>Funding Project:</b> Initiatives seeking financial support to
              realize their goals, whether for conservation, community
              development, or environmental causes.
            </li>
            <li>
              <b>Monitoring Project:</b> Projects aimed at tracking, analyzing,
              or overseeing various aspects, such as environmental changes,
              community progress, or specific objectives.
            </li>
          </ol>
        </div>
        <br />
        <div className="form-button" style={{ marginBottom: "10px" }}>
          <button
            onClick={() => {
              navigate(`${location.pathname}/funding-project`, {
                state: { type: "funding" },
              });
            }}
          >
            Funding Project
          </button>
          <button
            onClick={() => {
              navigate(`${location.pathname}/monitoring-project`, {
                state: { type: "monitoring" },
              });
            }}
          >
            Monitoring Project
          </button>
        </div>
      </div>
    </div>
  );
}
