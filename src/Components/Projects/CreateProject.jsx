import "./CreateProject.css";

const CreateProject = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box login-button">
          <h1 className="formHead">Create Project</h1>
          <div className="login-input">
            <input type="text" name="name" placeholder="Project name" />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
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
