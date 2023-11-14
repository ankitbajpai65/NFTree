import { Input, Button } from "@mui/material";
import "./CreateProject.css";

const CreateProject = () => {
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
            />
            <div className="form-col">
              <input
                type="text"
                name="plantPlanned"
                required
                placeholder="No of Plants Planned"
              />

              <input
                type="text"
                name="plantDonation"
                required
                placeholder="Donation per Plant"
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
            <div className="createProjectLabel">
              {/* <label htmlFor="">Upload Documents Related to Project</label> */}
              <Input
                id="file-input"
                name="regProof"
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
              <button className="submit-button" onClick="">
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
