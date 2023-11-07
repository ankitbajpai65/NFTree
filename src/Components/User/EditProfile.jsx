import "./EditProfile.css";

export default function EditProfile() {
  return (
    <>
      <div className="form-container" style={{ minHeight: "1000px" }}>
        <div className="form-box editForm">
          <div style={{ display: "inline-grid" }}>
            {" "}
            <img
              className="profileImg"
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&w=1000&q=80"
              alt=""
            />
            <a href="" style={{ alignItems: "start" }}>
              Change Profile pic
            </a>
          </div>

          <div className="form-input" style={{ alignItems: "start" }}>
            <div className="form-col profileName">
              <div>
                <label htmlFor="">First name</label>
                <input type="text" name="name" placeholder="First Name" />
              </div>
              <div>
                <label htmlFor="">Last name</label>
                <input type="text" name="name" placeholder="Last Name" />
              </div>
            </div>
            <label htmlFor="">Email</label>
            <input type="text" name="name" placeholder="Email" />

            <label htmlFor="">Address</label>
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

            <label htmlFor="">Password</label>
            <input type="text" name="name" placeholder="Password" />
            <input type="text" name="name" placeholder="New Password" />
            <a href="" style={{ alignItems: "start", marginTop: "-10px" }}>
              change password
            </a>
          </div>
          <div className="form-button" style={{ margin: "0" }}>
            <button className="submit-button" onClick="">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
