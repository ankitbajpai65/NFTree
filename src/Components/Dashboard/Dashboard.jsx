import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="form-container">
        <div className="form-box dashboardPage">
          <div className="dashboard-box">
            <h3>Total Ongoing Projects</h3>
            <p>100</p>
          </div>
          <div className="dashboard-box">
            <h3>Total Completed Projects</h3>
            <p>100</p>
          </div>
          <div className="dashboard-box">
            <h3>Total Users</h3>
            <p>100</p>
          </div>
          <div className="dashboard-box">
            <h3>Total Plants Planted</h3>
            <p>100</p>
          </div>
          {/* <div className="dashboard-box">
            <h3>Total Plants Planted</h3>
            <p>100</p>
          </div>
          <div className="dashboard-box">
            <h3>Total Oxygen Emitted</h3>
            <p>100</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
