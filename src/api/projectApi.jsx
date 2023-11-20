import axios from "axios";
import { baseURL } from "./kycApi";

const createProject = async (props) => {
  const url = `${baseURL}/project/create/`;
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

const kycStatus = async (props) => {
  const url = `${baseURL}/user/kyc/`;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    return error;
  }
};

const projectList = async () => {
  const url = `${baseURL}/project/projectlist/`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { createProject, projectList, kycStatus };
