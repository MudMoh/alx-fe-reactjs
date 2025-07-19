function Footer() {
	return (
		<footer
			style={{
				background: "#222",
				color: "#fff",
				textAlign: "center",
				padding: "16px 0",
				marginTop: "40px",
				position: "relative",
				left: 0,
				bottom: 0,
				width: "100%",
			}}>
			&copy; {new Date().getFullYear()} My Company. All rights reserved.
		</footer>
	);
}

export default Footer;
