export const formatSSRA = (
  email,
  questions,
  multi,
  answers,
  mitigations,
  riskLevels,
  ppe
) => {
  const response = questions.map((question, index) => {
    if (question.question_id !== 34) {
      return {
        question_id: question.question_id,
        answers_options: answers[index] ? +answers[index] : null,
        mitigation_Measures: mitigations[index] ? mitigations[index] : null,
        risk_level: riskLevels[index] ? +riskLevels[index] : null,
        multi_option: multi[index] ? multi[index] : null
      };
    } else {
      return {
        question_id: question.question_id,
        answers_options: answers[index] ? +answers[index] : null,
        mitigation_Measures: mitigations[index] ? mitigations[index] : null,
        risk_level: riskLevels[index] ? +riskLevels[index] : null,
        multi_option: ppe ? JSON.stringify(ppe) : null
      };
    }
  });
  const postSSRA = { email, response };
  return postSSRA;
};

export const dateConverter = dateIso => {
  const date = new Date(dateIso);
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
};
