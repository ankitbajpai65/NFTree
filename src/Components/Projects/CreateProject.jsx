import { Input, Button } from "@mui/material";
import "./CreateProject.css";

const CreateProject = () => {
  return (
    <>
      <div
        className="form-container"
        style={{ height: "100vh", minHeight: "950px" }}
      >
        <div className="form-box form-button">
          <h2 className="formHead">
            Let's Plant Trees: Nurturing the Future, One Sapling at a Time
          </h2>
          <div className="form-input">
            <input type="text" name="name" placeholder="Project name" />

            <textarea
              name="description"
              id=""
              cols="30"
              rows="5"
              placeholder="Tell us a little about project"
            />
            <br></br>
            <input
              type="text"
              name="area"
              required
              placeholder="Total Plantation Area in Square Meter"
            />
            <div className="form-col">
              <input
                type="text"
                name="plants"
                required
                placeholder="No of Plants Planned"
              />
              <input
                type="text"
                name="donation"
                required
                placeholder="Donation per Plant"
              />
            </div>

            <br></br>

            <input type="text" name="address" required placeholder="Address" />
            <div className="form-col">
              <input type="text" name="city" required placeholder="City" />
              <input
                type="text"
                name="country"
                required
                placeholder="Country
                "
              />
            </div>
            <br></br>

            <label htmlFor="">Upload Supporting Document</label>
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
              Browse file
            </Button>

            <button className="submit-button" onClick="">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
