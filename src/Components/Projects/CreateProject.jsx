import "./CreateProject.css";

const CreateProject = () => {
  return (
    <>
      <div className="login-container">
        <div className="head-part">
          <h1>Create Project</h1>
        </div>
        <div className="login-box">
          <div className="login-input">
            <input type="text" name="name" placeholder="Project name" />

            <input type="text" name="password" placeholder="Enter Password" />
          </div>

          <div className="login-button">
            <button className="submit-button" onClick="">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
