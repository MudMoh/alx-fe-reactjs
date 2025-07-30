import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
	const [query, setQuery] = useState("");
	const [location, setLocation] = useState("");
	const [minRepos, setMinRepos] = useState("");
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setUsers([]);
		try {
			const response = await fetchUserData(query, location, minRepos);
			setUsers(response.data.items);
		} catch {
			setError("Looks like we cant find the user");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username">
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Enter a GitHub username"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="location">
						Location
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="location"
						type="text"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						placeholder="Enter a location"
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="repos">
						Minimum Repositories
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="repos"
						type="number"
						value={minRepos}
						onChange={(e) => setMinRepos(e.target.value)}
						placeholder="Enter minimum number of repositories"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">
						Search
					</button>
				</div>
			</form>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{users.map((user) => (
					<div key={user.id} className="bg-white shadow-md rounded p-4">
						<img
							src={user.avatar_url}
							alt={`${user.login} avatar`}
							className="w-24 h-24 rounded-full mx-auto"
						/>
						<h2 className="text-xl font-bold text-center mt-4">{user.login}</h2>
						<a
							href={user.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="block text-center text-blue-500 hover:underline mt-2">
							View Profile
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Search;
