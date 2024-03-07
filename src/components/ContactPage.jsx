import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Skills from "./Skills";
import Footer from "./Footer";
import "../styles.css";
import Projects from "./Projects";
import Hero from "./Home";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <div>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;
