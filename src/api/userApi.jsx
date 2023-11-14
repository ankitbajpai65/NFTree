import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

let url;
let data;

const register = async (formData) => {
  url = "http://127.0.0.1:8000/user/register/";
  data = {
    username: formData.email,
    password: formData.password,
    first_name: formData.name.split(" ")[0],
    last_name: formData.name.split(" ")[1],
  };

  try {
    const response = await axiosPerformAction(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

const login = async (formData) => {
  url = "http://127.0.0.1:8000/user/login/";
  data = {
    username: formData.email,
    password: formData.password,
  };

  try {
    const response = await axiosPerformAction(url, data);
    sessionStorage.setItem("token", response.data.access);
    sessionStorage.setItem("id", response.data.id);
    return response;
  } catch (error) {
    return error;
  }
};

const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("id");
};

const googleLogin = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return login;
};

const axiosPerformAction = async (url, data) => {
  try {
    const respond = await axios({
      method: "post",
      url: url,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return respond;
  } catch (error) {
    throw error;
  }
};

export { login, register, googleLogin, logout };
