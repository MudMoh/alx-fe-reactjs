import axios from 'axios';

export const fetchUserData = (query, location, minRepos) => {
  let url = 'https://api.github.com/search/users?q=';
  let q = query;
  if (location) {
    q += `+location:${location}`;
  }
  if (minRepos) {
    q += `+repos:>=${minRepos}`;
  }
  url += q;
  return axios.get(url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
};
