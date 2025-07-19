import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	const buttonStyle = {
		margin: "0 8px",
		padding: "8px 16px",
		fontSize: "16px",
		borderRadius: "5px",
		border: "1px solid #888",
		background: "#f0f0f0",
		cursor: "pointer",
		transition: "background 0.2s",
	};

	return (
		<div>
			<h2>Simple Counter</h2>
			<p>Count: {count}</p>
			<button style={buttonStyle} onClick={() => setCount(count + 1)}>
				Increment
			</button>
			<button style={buttonStyle} onClick={() => setCount(count - 1)}>
				Decrement
			</button>
			<button style={buttonStyle} onClick={() => setCount(0)}>
				Reset
			</button>
		</div>
	);
}

export default Counter;
