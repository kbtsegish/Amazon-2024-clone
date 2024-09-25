import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-23ead/us-central1/api",

  //deployed version of amazon server on render 
  
  baseURL:"https://amazon-clone-api-jjh2.onrender.com",

  // Local backend URL
  // headers: {
  //   "Content-Type": "application/json", // Set default headers if needed
  // },
});


export { axiosInstance };
