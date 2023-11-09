import { Input, Button, Select, MenuItem } from "@mui/material";
import "./ContributeProject.css";

const CreateProject = () => {
  return (
    <>
      <div className="login-container contributeProjectContainer">
        <div className="login-box login-button">
          <h1 className="formHead">Contribute</h1>
          <div className="login-input">
            <label htmlFor="">Number of trees</label>
            <input type="text" name="name" />

            <label htmlFor="">Type of tree</label>
            <select name="trees" id="trees">
              <option value="" disabled selected>
                Select Tree
              </option>
              <option value="mango">Mango Tree</option>
              <option value="banyan">Banyan Tree</option>
              <option value="oak">Oak Tree</option>
            </select>

            <button className="submit-button" onClick="">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
