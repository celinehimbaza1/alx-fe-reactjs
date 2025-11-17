import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getUser = async (username) => {
  return await axios.get(`${BASE_URL}/users/${username}`);
};
