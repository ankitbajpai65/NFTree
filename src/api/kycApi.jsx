import axios from "axios";

const authToken = sessionStorage.getItem("token");

const accountDetails = () => {
  const data = {
    first_name: "",
    last_name: "",
    phone: "",
    wallet: "",
  };
  const url = `http://127.0.0.1:8000/user/account/${sessionStorage.getItem(
    "id"
  )}/`;
  axiosPerformAction(url, data, authToken);
};

const organizationDetails = () => {
  const data = {
    name: "",
    address: "",
    country: "",
    website: "",
    description: "",
    reg_id: "",
    reg_proof: null,
  };
  const url = `http://127.0.0.1:8000/user/organization/${sessionStorage.getItem(
    "id"
  )}/`;
  axiosPerformAction(url, data, authToken);
};

const axiosPerformAction = async (url, data, authToken) => {
  try {
    const respond = await axios({
      method: "put",
      url: url,
      data: data,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(respond);
  } catch (error) {
    console.log(error);
  }
};

export { accountDetails };
