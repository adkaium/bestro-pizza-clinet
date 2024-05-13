import axios from "axios";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useContext(AuthContext);
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("reques stoope", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      //  Do something with request err
      return Promise.reject(err);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    (err) => {
      const status = err.response.status;
      console.log("status erro", status);
      if (status === 401 || status === 403) {
        logOut()
          .then()
          .catch((err) => console.log(err));
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
