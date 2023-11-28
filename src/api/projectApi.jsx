import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

const createTransaction = async (data) => {
  try {
    const response = await API.post("/project/transaction/", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const viewTransaction = async (data) => {
  try {
    const response = await API.get("/project/transaction/", data);
    return response;
  } catch (error) {
    return error;
  }
};

const createProject = async (data) => {
  try {
    const response = await API.post("/project/create/", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const updateProject = async (id, data) => {
  const url = `/project/update/${id}/`;
  if (data.image === "img") {
    delete data.image;
  }

  data.id = id;

  try {
    const response = await API.put(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

const kycStatus = async () => {
  const url = "/user/kyc/";
  try {
    const response = await API.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

const projectList = async () => {
  const url = "/project/projectlist/";
  try {
    const response = await API.get(url);
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
