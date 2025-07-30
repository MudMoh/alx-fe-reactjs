import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
	const [username, setUsername] = useState("");
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setUser(null);
		try {
			const response = await fetchUserData(username);
			setUser(response.data);
		} catch {
			setError("Looks like we cant find the user");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Enter a GitHub username"
				/>
				<button type="submit">Search</button>
			</form>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{user && (
				<div>
					<img src={user.avatar_url} alt={`${user.login} avatar`} width="100" />
					<h2>{user.name}</h2>
					<p>{user.bio}</p>
					<a href={user.html_url} target="_blank" rel="noopener noreferrer">
						View Profile on GitHub
					</a>
				</div>
			)}
		</div>
	);
};

export default Search;
