import React from "react";
import "./Projectreport.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "nitrogen", value: 400 },
  { name: "phosphorus", value: 300 },
  { name: "potassium", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function Projectreport() {
  return (
    <>
      <div className="form-container">
        <div className="form-box" style={{ width: "80%", maxWidth: "unset" }}>
          <h1 className="formHead">Project Report</h1>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="box Newbox">
              <h3>Total Plants</h3>
              <h2>120</h2>
            </div>

            <div className="box Newbox">
              <h3>Species Diversity</h3>
              <h2>13</h2>
            </div>

            <div className="box Newbox">
              <h3>Tree Age and Growth</h3>
              <div className="boxItems">
                <span>
                  <p>108 days</p>
                  <h4>Tree Age</h4>
                </span>
                <span>
                  <p>10-12 inch</p>
                  <h4>Growth Rate</h4>
                </span>
              </div>
            </div>

            <div className="box Newbox">
              <h3>Environmental Impact</h3>
              <div className="boxItems">
                <span>
                  <p>25 Kg</p>
                  <h4>CO2 Absorption</h4>
                </span>
                <span>
                  <p>4.5 Kg</p>
                  <h4>Oxygen Emission</h4>
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="box Newbox">
              <h3>Soil Health</h3>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <PieChart width={230} height={200}>
                      <Pie
                        data={data}
                        cx={120}
                        cy={100}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                  <div className="color">
                    <h4>Nutrient Composition</h4>

                    <p>
                      <span style={{ background: "#0088FE" }}></span>nitrogen
                    </p>
                    <p>
                      <span style={{ background: "#00C49F" }}></span>phosphorus
                    </p>
                    <p>
                      <span style={{ background: "#FFBB28" }}></span>potassium
                    </p>
                  </div>
                </div>
                <div className="boxItems">
                  <span>
                    <p style={{ marginBottom: "25px" }}>40%</p>
                    <h4>Moisture Level</h4>
                  </span>
                  <span style={{ paddingRight: "40px" }}>
                    <p style={{ marginBottom: "25px" }}>6.5</p>
                    <h4>Soil pH</h4>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="box Newbox
            "
            >
              <h3>Health of Plants</h3>
              <div className="boxItems">
                <span>
                  <p style={{ margin: "25px" }}>Good</p>
                  <h4>Leaf Health</h4>
                </span>
                <span>
                  <p style={{ marginBottom: "25px" }}>Good</p>
                  <h4>Root Health</h4>
                </span>
              </div>
            </div>
          </div>

          <div
            className="form-button"
            style={{ width: "15%", margin: "auto", marginTop: "50px" }}
          >
            <button>Send to Email</button>
          </div>
        </div>
      </div>
    </>
  );
}
