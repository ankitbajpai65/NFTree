import axios from "axios";

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5ODU0ODIxLCJpYXQiOjE2OTk4NTEyMjEsImp0aSI6IjM2YTBlOTk4NzFlYzQ1NmFhNzQ1NDc1ZDZkNDZiODBlIiwidXNlcl9pZCI6MTF9.0LxkikK3tZINfz9R4PTmTuxy2eD4xQ0-rQdxZ8acYbk";

const accountDetails = () => {
  const data = {
    first_name: "abcdeee",
    last_name: "efgheee",
    phone: "9876567898",
    wallet: "0x5677578gyut7867frygfuiy8767867r65r",
  };
  const url = "http://127.0.0.1:8000/user/account/3/";
  axiosPerformAction(url, data, authToken);
};

const organizationDetails = () => {};

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
