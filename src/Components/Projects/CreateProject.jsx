import { TextField, Input, Button } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import "./CreateProject.css";

const CreateProject = () => {
  function handleOnChange(value) {
    this.setState({
      phone: value
    });
  }

  return (
    <>
      <div className="login-container createProjectContainer">
        <div className="login-box login-button">
          <h2 className="formHead">Let's Plant Trees: Nurturing the Future, One Sapling at a Time</h2>
          <div className="login-input">
            <label htmlFor="">Upload file</label>
            <Input
              id="file-input"
              name="regProof"
              type="file"
              inputProps={{ accept: 'image/*' }}
              disableUnderline
              style={{ display: 'none' }}
            // onChange={handleFileUpload}
            />
            <Button
              variant="outlined"
              component="label"
              htmlFor="file-input"
              className="uploadBtn"
              sx={{
                width: '100%',
                textTransform: "capitalize",
                color: '#757575',
                border: '1px solid #E4E4E7'
              }}

            // className="outlinedBtn"
            >
              Browse file
            </Button>
            <input type="text" name="name" placeholder="Project name" />

            <input
              type="number"
              name="trees"
              placeholder="No of trees required"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone No"
            />

            <textarea name="description" id="" cols="30" rows="8" placeholder="Tell us a little about project" />

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
