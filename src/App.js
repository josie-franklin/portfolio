// import framework and library dependancies
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import styles
import "./App.css";

// import components used
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import setions used
import Landing from "./sections/Landing/Landing";
import About from "./sections/About/About";
import Portfolio from "./sections/Portfolio/Portfolio";
import Contact from "./sections/Contact/Contact";
import Resume from "./sections/Resume/Resume";

// App
function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <main>
          <Landing />
          <About />
          <Portfolio />
          <Contact />
          <Resume />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
