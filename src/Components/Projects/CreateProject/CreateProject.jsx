import { Input, Button } from "@mui/material";
import "./CreateProject.css";
import { useState } from "react";

/////////////////////////////////////////////
//////////// Validation /////////////////////
////////////////////////////////////////////

const checkValidation = () => {
  var customErrorMessage;
  if (
    !isRegistered &&
    (20 < formData.name.length || formData.name.length < 5)
  ) {
    customErrorMessage = "Name is required and should be 5-20 Characters";
  } else if (!validEmail.test(formData.email)) {
    customErrorMessage = "Please Enter Valid Email";
  } else if (formData.password.length < 8) {
    customErrorMessage = "password should be minimun 8 character long";
  } else if (!isRegistered && formData.password != formData.cnfPassword) {
    customErrorMessage = "Unmatched Password and Confirm Password";
  } else if (!isRegistered && !document.getElementById("tccheckbox").checked) {
    customErrorMessage = "Please Accept Terms and Conditions first";
  } else {
    customErrorMessage = null;
  }

  setIsError(customErrorMessage);
};

///////handle Validation
const handleErrorMessage = (newError = isError) => {
  document.getElementsByClassName("errorText")[0].innerText = newError;
  setTimeout(() => {
    document.getElementsByClassName("errorText")[0].innerText = "";
  }, 4000);
};

/////////////////////////////////////////////
//////////// Validation End /////////////////
////////////////////////////////////////////

const CreateProject = () => {
  const [createProjectData, setCreateProjectData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCreateProjectData({
      name: document.getElementsByName("projectName")[0].value,
      description: document.getElementsByName("projectDescription")[0].value,
      plant_types: document.getElementsByName("plantType")[0].value,
      area: document.getElementsByName("plantArea")[0].value,
      plant_planned: document.getElementsByName("plantPlanned")[0].value,
      donation: document.getElementsByName("plantDonation")[0].value,
      address: document.getElementsByName("projectAddress")[0].value,
      city: document.getElementsByName("projectCity")[0].value,
      country: document.getElementsByName("projectCountry")[0].value,
      document: document.getElementsByName("plantType")[0].value,
      image: document.getElementsByName("plantType")[0].value,
    });
    console.log(createProjectData);
  };

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
          <div className="form-input">
            <input type="text" name="projectName" placeholder="Project name" />

            <textarea
              name="projectDescription"
              cols="30"
              rows="5"
              placeholder="Tell us a little about project (100 Character atleast)"
            />
            <br></br>
            <input
              type="text"
              name="plantType"
              required
              placeholder="Types of Plants (use comma to seperate)"
            />
            <input
              type="text"
              name="plantArea"
              required
              placeholder="Total Plantation Area in Square Meter"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
              }
            />
            <div className="form-col">
              <input
                type="text"
                name="plantPlanned"
                required
                placeholder="No of Plants Planned"
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
                }
              />

              <input
                type="text"
                name="plantDonation"
                required
                placeholder="Donation per Plant"
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
                }
              />
            </div>

            <br></br>

            <input
              type="text"
              name="projectAddress"
              required
              placeholder="Address"
            />
            <div className="form-col">
              <input
                type="text"
                name="projectCity"
                required
                placeholder="City"
              />
              <input
                type="text"
                name="projectCountry"
                required
                placeholder="Country
                "
              />
            </div>
            <br></br>
            <input type="file" />
            <div className="createProjectLabel">
              {/* <label htmlFor="">Upload Documents Related to Project</label> */}
              <Input
                name="projectDocumants"
                type="file"
                inputProps={{ accept: "image/*" }}
                disableUnderline
                // onChange={handleFileUpload}
              />

              <Button
                variant="outlined"
                component="label"
                htmlFor="file-input"
                className="uploadBtn"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  color: "#757575",
                  border: "1px solid #E4E4E7",
                }}
              >
                Upload Documents Related to Project
              </Button>
              <br></br>
              <br></br>

              {/* <label htmlFor="">Upload Project Image</label> */}
              <Input
                id="file-input"
                name="projectImg"
                type="file"
                inputProps={{ accept: "image/*" }}
                disableUnderline
                style={{ display: "none" }}
                // onChange={handleFileUpload}
              />

              <Button
                variant="outlined"
                component="label"
                htmlFor="file-input"
                className="uploadBtn"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  color: "#757575",
                  border: "1px solid #E4E4E7",
                }}
              >
                Upload Project Image
              </Button>
            </div>
            <div className="form-button">
              <button className="submit-button" onClick={handleSubmit}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
