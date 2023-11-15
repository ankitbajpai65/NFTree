import "./CreateProject.css";
import { useFormik } from "formik";
import { createProjectSchema } from "./ValidationSchema";
import { createProject } from "../../../api/projectApi";
import { useState } from "react";

const initialValues = {
  name: "",
  description: "",
  plant_types: "",
  area: "",
  plant_planned: "",
  plants_planted: 0,
  donation: "",
  address: "",
  city: "",
  country: "",
  document: "",
  image: "",
  is_completed: false,
  user: "",
};

const CreateProjectPage = () => {
  const [showError, setShowError] = useState(false);
  const { values, errors, handleChange, handleSubmit, touched, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: createProjectSchema,
      onSubmit: (values, action) => {
        // action.resetForm();
        values.user = sessionStorage.getItem("id");
        console.log(values);
        createProject(values);
      },
    });

  return (
    <>
      <div
        className="form-container"
        style={{ height: "100vh", minHeight: "1120px" }}
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

            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Tell us a little about project (100 Character atleast)"
              value={values.description}
              onChange={handleChange}
            />

            <br></br>
            <input
              type="text"
              name="plant_types"
              placeholder="Types of Plants (use comma to seperate)"
              value={values.plant_types}
              onChange={handleChange}
            />

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

            <div className="form-col">
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
            </div>

            <br></br>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={values.address}
              onChange={handleChange}
            />

            <div className="form-col">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={values.country}
                onChange={handleChange}
              />
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
            </div>
            <div className="form-button">
              <button type="submit" className="submit-button">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
      {Object.keys(errors).length != 0 && (
        <div className="errorBox">
          <h3>Errors</h3>
          {errors.name && touched.name ? (
            <span className="form-error">{errors.name}</span>
          ) : (
            ""
          )}

          {errors.description && touched.description ? (
            <span className="form-error">{errors.description}</span>
          ) : (
            ""
          )}

          {errors.plant_types && touched.plant_types ? (
            <span className="form-error">{errors.plant_types}</span>
          ) : (
            ""
          )}

          {errors.area && touched.area ? (
            <span className="form-error">{errors.area}</span>
          ) : (
            ""
          )}

          {errors.plant_planned && touched.plant_planned ? (
            <span className="form-error">{errors.plant_planned}</span>
          ) : (
            ""
          )}
          {errors.donation && touched.donation ? (
            <span className="form-error">{errors.donation}</span>
          ) : (
            ""
          )}

          {errors.address && touched.address ? (
            <span className="form-error">{errors.address}</span>
          ) : (
            ""
          )}

          {errors.city && touched.city ? (
            <span className="form-error">{errors.city}</span>
          ) : (
            ""
          )}

          {errors.country && touched.country ? (
            <span className="form-error">{errors.country}</span>
          ) : (
            ""
          )}

          {errors.document && touched.document ? (
            <span className="form-error">{errors.document}</span>
          ) : (
            ""
          )}

          {errors.image && touched.image ? (
            <span className="form-error">{errors.image}</span>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default CreateProjectPage;
