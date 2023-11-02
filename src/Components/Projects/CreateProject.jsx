import { Input, Button } from '@mui/material';
import "./CreateProject.css";

const CreateProject = () => {
  return (
    <>
      <div className="login-container createProjectContainer">
        <div className="login-box login-button">
          <h2 className="formHead">Let's Plant Trees: Nurturing the Future, One Sapling at a Time</h2>
          <div className="login-input">

            <input type="text" name="name" placeholder="Project name" />

            <input
              type="text"
              name="area"
              placeholder="Total Plantation Area in Square Meter"
            />
            <input
              type="text"
              name="plants"
              placeholder="No of Plants Planned"
            />
            <input
              type="text"
              name="donation"
              placeholder="Donation Cost per Plant"
            />

            <label htmlFor="">About Project <sup style={{ color: 'red' }}>*</sup></label>
            <textarea name="description" id="" cols="30" rows="5" placeholder="Tell us a little about project" />

            <label htmlFor="">Upload Supporting Document</label>
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
