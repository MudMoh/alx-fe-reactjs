import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import { searchUser } from "./services/githubAPI";

function App() {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const handleSearch = async (username) => {
		try {
			const response = await searchUser(username);
			setUser(response.data);
			setError(null);
		} catch {
			setError("User not found");
			setUser(null);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>GitHub User Search</h1>
				<Search onSearch={handleSearch} />
			</header>
			<main>
				{error && <p>{error}</p>}
				<UserProfile user={user} />
			</main>
		</div>
	);
}

export default App;
