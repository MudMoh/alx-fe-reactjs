import { useState } from "react";

function RegistrationForm() {
	const [form, setForm] = useState({ username: "", email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.username || !form.email || !form.password) {
			setError("All fields are required.");
			return;
		}
		setError("");
		alert("Registration successful!\n" + JSON.stringify(form, null, 2));
		// Simulate API call here
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{ maxWidth: 400, margin: "2rem auto" }}>
			<h2>Register</h2>
			{error && <div style={{ color: "red" }}>{error}</div>}
			<input
				type="text"
				name="username"
				placeholder="Username"
				value={form.username}
				onChange={handleChange}
				style={{ display: "block", margin: "10px 0", width: "100%" }}
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={form.email}
				onChange={handleChange}
				style={{ display: "block", margin: "10px 0", width: "100%" }}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={form.password}
				onChange={handleChange}
				style={{ display: "block", margin: "10px 0", width: "100%" }}
			/>
			<button type="submit">Register</button>
		</form>
	);
}

export default RegistrationForm;
