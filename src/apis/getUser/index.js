import axios from "./../instance";

export const getUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
