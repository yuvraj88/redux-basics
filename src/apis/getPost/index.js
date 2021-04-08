import axios from "./../instance";

export const getPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1");
};
