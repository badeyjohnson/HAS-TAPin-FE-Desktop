import axios from "axios";

const BASE_URL = "http://localhost:9090/api/";

export const auth = async email => {
  const { data } = await axios.get(`${BASE_URL}users/${email}`);
  return data.user;
};

export const getJobs = async email => {
  const { data } = await axios.get(`${BASE_URL}users/${email}/jobs`);
  return data;
};

export const getSingleJob = async jobNo => {
  const { data } = await axios.get(`${BASE_URL}jobs/${jobNo}`);
  return data.job;
};

export const getJobSites = async jobNo => {
  const { data } = await axios.get(`${BASE_URL}jobs/${jobNo}/sites`);
  return data.sites;
};

export const getSiteRiskAssessments = async siteId => {
  const { data } = await axios.get(
    `${BASE_URL}sites/${siteId}/risk_assessments`
  );
  return data.riskAssessments;
};

export const getQuestions = async siteId => {
  const { data } = await axios.get(
    `${BASE_URL}sites/${siteId}/new_risk_assessment`
  );
  const questions = data.questions.map(q => {
    return {
      ...q,
      question_IdName: `q${q.question_id}`
    };
  });
  return questions;
};

export const createJob = async (email, jobDetails) => {
  axios.post(`${BASE_URL}users/${email}/jobs`, jobDetails);
};

export const linkJob = async (email, jobNo) => {
  axios.post(`${BASE_URL}users/${email}/jobs/link`, jobNo);
};

export const createSite = async (jobNo, siteDetails) => {
  axios.post(`${BASE_URL}jobs/${jobNo}/sites`, siteDetails);
}
