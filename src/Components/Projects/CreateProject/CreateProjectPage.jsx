import "./CreateProject.css";
import { useFormik } from "formik";
import { createProjectSchema } from "./ValidationSchema";
import { createProject } from "../../../api/projectApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  description: "",
  plant_types: "",
  // plantImage: "",
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
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [plantType, setPlantType] = useState([]);

  const handleTextChange = (newText) => {
    const items = newText.split(",").map((item) => item.trim());
    setPlantType(items);
    setText(newText);
  };

  const { values, errors, handleChange, handleSubmit, touched, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: createProjectSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        values.user = sessionStorage.getItem("id");
        createProject(values);
        navigate("/ongoingProjects");
      },
    });

  const renderFileInputs = () => {
    const fileInputs = [];

    if (plantType.length == 0 || plantType[0] === "") return;

    for (let i = 0; i < plantType.length; i++) {
      fileInputs.push(
        <div key={i} style={{ width: "49%", marginTop: "2px" }}>
          <input
            type="file"
            name={`plantImage${i}`}
            accept="image/*"
            onChange={(event) => {
              setFieldValue(`plantImage${i}`, event.currentTarget.files[0]);
            }}
            className={
              values[`plantImage${i}`] ? "" : "plantImage customUpload"
            }
            data-upload-text={`Upload ${plantType[i]} image`}
          />
          {errors[`plantImage${i}`] && touched[`plantImage${i}`] ? (
            <small className="form-error">{errors[`plantImage${i}`]}</small>
          ) : (
            ""
          )}
        </div>
      );
    }
    return fileInputs;
  };

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
            {errors.name && touched.name ? <small>{errors.name}</small> : ""}
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Tell us a little about project (300 Character atleast)"
              value={values.description}
              onChange={handleChange}
            />
            {errors.description && touched.description ? (
              <small>{errors.description}</small>
            ) : (
              ""
            )}
            <br></br>

            <div className="projectFile">
              <input
                type="text"
                name="plant_types"
                placeholder="Types of Plants (use comma to seperate)"
                value={values.plant_types}
                onChange={(e) => {
                  handleChange(e);
                  handleTextChange(e.target.value);
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2%",
                }}
              >
                {renderFileInputs()}
              </div>
            </div>

            {errors.plant_types && touched.plant_types ? (
              <small>{errors.plant_types}</small>
            ) : (
              ""
            )}

            <br></br>

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
            {errors.area && touched.area ? <small>{errors.area}</small> : ""}
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
                  <small>{errors.plant_planned}</small>
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
                  <small>{errors.donation}</small>
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
              <small>{errors.address}</small>
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
                  <small>{errors.city}</small>
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
                  <small>{errors.country}</small>
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
                <small>{errors.document}</small>
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
                <small>{errors.image}</small>
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
