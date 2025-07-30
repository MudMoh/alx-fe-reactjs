import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const github = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`,
  },
});

export const fetchUserData = (query, location, minRepos) => {
  let q = query;
  if (location) {
    q += `+location:${location}`;
  }
  if (minRepos) {
    q += `+repos:>=${minRepos}`;
  }
  return github.get(`/search/users?q=${q}`);
};
