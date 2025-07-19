import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<div style={{ maxWidth: "800px", margin: "0 auto" }}>
					<Routes>
						<Route path="/" element={<Home />} />
						{/* <Route path="./components/Home" element={<Home />} /> */}
						<Route path="./components/About" element={<About />} />
						<Route path="./components/Services" element={<Services />} />
						<Route path="./components/Contact" element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
