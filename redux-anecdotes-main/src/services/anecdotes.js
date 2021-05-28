import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  console.log(content);
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const voteAnecdote = async (id) => {
  const existingAnecdote = await axios.get(`${baseUrl}/${id}`);
  existingAnecdote.data.votes = existingAnecdote.data.votes + 1;
  const response = await axios.put(`${baseUrl}/${id}`, existingAnecdote.data);
  return response.data;
};

export default { getAll, createNew, voteAnecdote };
