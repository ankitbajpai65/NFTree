import "./CreateProject.css";
import { useFormik } from "formik";
import { createProjectSchema } from "./ValidationSchema";
import { createProject, updateProject } from "../../../api/projectApi";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CreateProjectPage = () => {
  const state = useLocation();
  const data = state.state;
  const initialValues = {
    name: data == null ? "" : data.data.name,
    description: data == null ? "" : data.data.description,
    plant_types: data == null ? "" : data.data.plant_types,
    area: data == null ? "" : data.data.area,
    plant_planned: data == null ? "" : data.data.plant_planned,
    plants_planted: data == null ? 0 : data.data.plants_planted,
    donation: data == null ? "" : data.data.donation,
    address: data == null ? "" : data.data.address,
    city: data == null ? "" : data.data.city,
    country: data == null ? "" : data.data.country,
    document: "",
    image: data == null ? "" : "img",
    is_completed: data == null ? false : data.data.is_completed,
    user: data == null ? "" : data.data.user,
  };
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, touched, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: createProjectSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        if (data == null) {
          values.user = sessionStorage.getItem("id");
          createProject(values);
          navigate("/ongoingProjects");
        } else {
          updateProject(values, data.data.id);
          setTimeout(() => {
            navigate("/profile", { state: "my_projects" });
          }, 1000);
        }
      },
    });

  return (
    <>
      <div
        className="form-container"
        style={{ height: "100%", marginTop: "60px" }}
      >
        <div className="form-box " style={{ margin: "35px 0px" }}>
          <h2 className="formHead">
            Let's Plant Trees: Nurturing the Future, One Sapling at a Time
          </h2>
          <form className="form-input" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Project name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && touched.name ? (
              <span className="form-error">{errors.name}</span>
            ) : (
              ""
            )}
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Tell us a little about project (300 Character atleast)"
              value={values.description}
              onChange={handleChange}
            />
            {errors.description && touched.description ? (
              <span className="form-error">{errors.description}</span>
            ) : (
              ""
            )}
            <br></br>

            <input
              type="text"
              name="plant_types"
              placeholder="Types of Plants (use comma to seperate)"
              value={values.plant_types}
              onChange={handleChange}
            />
            {/* <div>
                <span style={{ display: "flex" }}>
                  <input
                    type="text"
                    name="plant_types"
                    placeholder="Plant Name"
                  />
                  <input type="file" id="inputTag" />
                </span>
              </div> 
              
              */}

            {errors.plant_types && touched.plant_types ? (
              <span className="form-error">{errors.plant_types}</span>
            ) : (
              ""
            )}

            <input
              type="text"
              name="area"
              placeholder="Total Plantation Area in Square Meter"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
              }
              value={values.area}
              onChange={handleChange}
            />
            {errors.area && touched.area ? (
              <span className="form-error">{errors.area}</span>
            ) : (
              ""
            )}
            <div className="form-col">
              <div>
                <input
                  type="text"
                  name="plant_planned"
                  placeholder="No of Plants Planned"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
                  }
                  value={values.plant_planned}
                  onChange={handleChange}
                />
                {errors.plant_planned && touched.plant_planned ? (
                  <span className="form-error">{errors.plant_planned}</span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="donation"
                  placeholder="Donation per Plant"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
                  }
                  value={values.donation}
                  onChange={handleChange}
                />
                {errors.donation && touched.donation ? (
                  <span className="form-error">{errors.donation}</span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <br></br>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && touched.address ? (
              <span className="form-error">{errors.address}</span>
            ) : (
              ""
            )}
            <div className="form-col">
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={values.city}
                  onChange={handleChange}
                />
                {errors.city && touched.city ? (
                  <span className="form-error">{errors.city}</span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={values.country}
                  onChange={handleChange}
                />
                {errors.country && touched.country ? (
                  <span className="form-error">{errors.country}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <br></br>
            <div className="projectFile">
              <input
                id="inputTag"
                type="file"
                name="document"
                accept=".zip,.pdf"
                onChange={(event) => {
                  setFieldValue("document", event.currentTarget.files[0]);
                }}
                className={values.document ? "" : "projectDoc"}
              />
              {errors.document && touched.document ? (
                <span className="form-error">{errors.document}</span>
              ) : (
                ""
              )}
              <br />
              <br />
              <input
                id="inputTag"
                type="file"
                name="image"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                className={values.image ? "" : "projectImg"}
              />
              {errors.image && touched.image ? (
                <span className="form-error">{errors.image}</span>
              ) : (
                ""
              )}
            </div>
            <div className="form-button">
              <button type="submit" className="submit-button">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProjectPage;
