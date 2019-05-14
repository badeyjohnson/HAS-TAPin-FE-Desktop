import axios from "axios";

const BASE_URL = "http://localhost:9090/api/";

export const auth = async (email) => {
  const {data} = await axios.get(`${BASE_URL}users/${email}`);
  return data.user
};

export const getJobs = async (email) => {
  const {data} = await axios.get(`${BASE_URL}users/${email}/jobs`);
  return data
}

export const getSingleJob = async (jobNo) => {
  const {data} = await axios.get(`${BASE_URL}jobs/${jobNo}`);
  return data.job
}

export const getJobSites = async (jobNo) => {
  const {data} = await axios.get(`${BASE_URL}jobs/${jobNo}/sites`);
  return data.sites
}

export const getQuestions = async (siteId) => {
  const {data} = await axios.get(`${BASE_URL}sites/${siteId}/new_risk_assessment`);
  return data
}