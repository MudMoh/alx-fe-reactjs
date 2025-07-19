import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<div style={{ maxWidth: "800px", margin: "0 auto" }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Company"
        style={{ width: "60%", borderRadius: "12px", marginBottom: "24px" }}
      />
      <h1>Welcome to Our Company</h1>
      <p>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

export default Home;
