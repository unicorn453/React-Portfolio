import React from "react";
import Header from "./Header";
import Hero from "./Home";
import Skills from "./Skills";
import Footer from "./Footer";
import "../styles.css";

function HomePage() {
  return (
    <div className="homepage-bg">
      <Header />
      <main className="homepage-main">
        <Hero />
        <div className="homepage-skills">
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
