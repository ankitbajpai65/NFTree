import axios from "axios";
import { baseURL } from "./kycApi";

const createTransaction = async (props) => {
  const url = "http://127.0.0.1:8000/project/transaction/";
  const data = props;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.post(url, data, config);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const viewTransaction = async (props) => {
  const url = "http://127.0.0.1:8000/project/transaction/";
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
    console.error(error);
  }
};

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
    console.log(data);
    const response = await axios.post(url, data, config);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const updateProject = async (props, id) => {
  const url = `http://127.0.0.1:8000/project/update/${id}/`;
  if (props.image == "img") {
    delete props.image;
  }

  props["id"] = id;
  const data = props;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  try {
    const response = await axios.put(url, data, config);
    return response;
  } catch (error) {
    return error;
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

export {
  createProject,
  projectList,
  kycStatus,
  updateProject,
  createTransaction,
  viewTransaction,
};
