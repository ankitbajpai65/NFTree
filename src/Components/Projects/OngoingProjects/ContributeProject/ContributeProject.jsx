import { Input, Button, Select, MenuItem } from "@mui/material";
import "./ContributeProject.css";

const CreateProject = () => {
  return (
    <>
      <div className="form-container contributeProjectContainer">
        <div className="form-box login-button">
          <h1 className="formHead">Contribute</h1>
          <div className="form-input">
            <label htmlFor="">Number of trees</label>
            <input type="text" name="name" />

            <label htmlFor="">Type of tree</label>
            <Select name="trees" id="trees" style={{ width: "100%" }}>
              <option value="" disabled selected>
                Select Tree
              </option>
              <option value="mango">Mango Tree</option>
              <option value="banyan">Banyan Tree</option>
              <option value="oak">Oak Tree</option>
            </Select>
            <div className="form-button">
              <button className="submit-button" onClick="">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
