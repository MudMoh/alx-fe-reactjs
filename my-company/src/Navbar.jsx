import { Link } from "react-router-dom";

const navStyle = {
	display: "flex",
	gap: "20px",
	padding: "16px",
	background: "#222",
	color: "#fff",
	marginBottom: "24px",
};

const linkStyle = {
	color: "#fff",
	textDecoration: "none",
	fontWeight: "bold",
	fontSize: "18px",
};

function Navbar() {
	return (
		<nav style={navStyle}>
			<Link to="/" style={linkStyle}>
				Home
			</Link>
			<Link to="/about" style={linkStyle}>
				About
			</Link>
			<Link to="/services" style={linkStyle}>
				Services
			</Link>
			<Link to="/contact" style={linkStyle}>
				Contact
			</Link>
		</nav>
	);
}

export default Navbar;
