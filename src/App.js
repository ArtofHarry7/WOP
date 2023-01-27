import "./App.css";

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Footer />
    </Router>
  );
}

export default App;
