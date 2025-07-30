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
  const searchParams = new URLSearchParams({
    q: query,
  });

  if (location) {
    searchParams.set('q', `${searchParams.get('q')}+location:${location}`);
  }

  if (minRepos) {
    searchParams.set('q', `${searchParams.get('q')}+repos:>=${minRepos}`);
  }

  return github.get(`/search/users?${searchParams.toString()}`);
};
