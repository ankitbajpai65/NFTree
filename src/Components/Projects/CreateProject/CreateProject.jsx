import React, { useCallback } from 'react';
import "./CreateProject.css";
import { useFormik } from "formik";
import { createProjectSchema } from "./ValidationSchema";
import { createProject } from "../../../api/projectApi";

const CreateProject = () => {
  // const [showError, setShowError] = useState(false);
  // const { values, errors, handleChange, handleSubmit, touched, setFieldValue } =
  //   useFormik({
  //     initialValues: initialValues,
  //     validationSchema: createProjectSchema,
  //     onSubmit: (values, action) => {
  //       // action.resetForm();
  //       values.user = sessionStorage.getItem("id");
  //       console.log(values);
  //       createProject(values);
  //     },
  //   });

  const handleOnSubmit = (values) => {
    const fullName = Object.keys(values)
      .map((key) => values[key])
      .join(" ");
    alert(`Hello ${fullName}!`);
  };

  const formik = useFormik({
    initialValues: {
      projectName: "",
      description: "",
      plantType: "",
      area: "",
      totalPlantsPlanned: "",
      // plants_planted: 0,
      donation: "",
      address: "",
      city: "",
      country: "",
      document: "",
      image: "",
      is_completed: false,
      user: "",
    },
    validationSchema: createProjectSchema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  console.log(formik);

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

          <form className="form-input" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="projectName"
              placeholder="Project name"
              value={formik.values.projectName}
              onChange={(e) => setInputValue("projectName", e.target.value)}
            />
            <small>{formik.errors.projectName}</small>

            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Tell us a little about project (100 Character atleast)"
              value={formik.values.description}
              onChange={(e) => setInputValue("description", e.target.value)}
            />
            <small>{formik.errors.description}</small>

            <input
              type="text"
              name="plantType"
              placeholder="Type of Plants (use comma to seperate)"
              value={formik.values.plantType}
              onChange={(e) => setInputValue("plantType", e.target.value)}
            />
            <small>{formik.errors.plantType}</small>

            <input
              type="text"
              name="area"
              placeholder="Total Plantation Area in Square Meter"
              value={formik.values.area}
              onChange={(e) => setInputValue("area", e.target.value)}
            />
            <small>{formik.errors.area}</small>

            <div className="form-col">
              <div>
                <input
                  type="text"
                  name="totalPlantsPlanned"
                  placeholder="No of Plants Planned"
                  value={formik.values.totalPlantsPlanned}
                  onChange={(e) => setInputValue("totalPlantsPlanned", e.target.value)}
                />
                <small>{formik.errors.totalPlantsPlanned}</small>
              </div>

              <div>
                <input
                  type="text"
                  name="donation"
                  placeholder="Donation per Plant"
                  value={formik.values.donation}
                  onChange={(e) => setInputValue("donation", e.target.value)}
                />
                <small>{formik.errors.donation}</small>
              </div>
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formik.values.address}
              onChange={(e) => setInputValue("address", e.target.value)}
            />
            <small>{formik.errors.address}</small>

            <div className="form-col">
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formik.values.city}
                  onChange={(e) => setInputValue("city", e.target.value)}
                />
                <small>{formik.errors.city}</small>
              </div>

              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formik.values.country}
                  onChange={(e) => setInputValue("country", e.target.value)}
                />
                <small>{formik.errors.country}</small>
              </div>
            </div>

            {/* <div className="projectFile"> */}
            <input
              id="inputTag"
              type="file"
              name="document"
              accept=".zip,.pdf"
              placeholder="Upload documents"
              value={formik.values.document}
              onChange={(e) => setInputValue("document", e.target.value)}
            />
            <small>{formik.errors.document}</small>

            <input
              id="inputTag"
              type="file"
              name="image"
              accept="image/*"
              value={formik.values.image}
              onChange={(e) => setInputValue("image", e.target.value)}
            />
            <small>{formik.errors.image}</small>
            {/* </div> */}

            {/* {!!formik.errors.lastName && <br />} */}

            <div className="form-button">
              <button type="submit" disabled={!formik.isValid} className="submit-button">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div >
    </>
  );
};

export default CreateProject;
