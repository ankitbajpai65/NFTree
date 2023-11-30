import React from "react";
import "./CreateProject.css";

export default function CreateProjectOption() {
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
          <button>Funding Project</button>
          <button>Monitoring Project</button>
        </div>
      </div>
    </div>
  );
}
