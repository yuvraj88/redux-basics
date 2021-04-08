import axios from "axios";

//create an axios instance with
//default headers
//and other if necessary which
//needs to be attched inside headers

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
