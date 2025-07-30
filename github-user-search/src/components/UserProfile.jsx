import React from "react";

const UserProfile = ({ user }) => {
	if (!user) {
		return <div>Search for a user to see their profile.</div>;
	}

	return (
		<div>
			<img src={user.avatar_url} alt={`${user.login} avatar`} width="100" />
			<h2>{user.name}</h2>
			<p>{user.bio}</p>
			<a href={user.html_url} target="_blank" rel="noopener noreferrer">
				View Profile on GitHub
			</a>
		</div>
	);
};

export default UserProfile;
