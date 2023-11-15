import axios from "axios";

const createProject = async (props) => {
  const url = "http://127.0.0.1:8000/project/create/";
  const data = props;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  try {
    const response = await axios.post(url, data, config);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const projectList = async () => {
  const url = "http://127.0.0.1:8000/project/projectlist/";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { createProject, projectList };
