import axios from "axios";

const useAxios = () => {
  const axiosURL = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });

  return axiosURL;
};

export default useAxios;
