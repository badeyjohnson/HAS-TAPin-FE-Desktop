import axios from "axios";

const BASE_URL = "http://localhost:9090/api/";

export const auth = async (email) => {
  const {data} = await axios.get(`${BASE_URL}users/${email}`);
  return data.user
};

export const jobs = async (email) => {
  const {data} = await axios.get(`${BASE_URL}users/${email}/jobs`);
  return data
}