import axios from "axios";

const useAxios = () => {
  const axiosURL = axios.create({
    baseURL: "https://faisalcafeserver.vercel.app",
  });

  return axiosURL;
};

export default useAxios;
