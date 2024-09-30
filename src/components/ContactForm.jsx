import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  // useEffect to load the Typeform embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-page">
      <h2>Contact Form</h2>
      {/* This will embed the Typeform form */}
      <div data-tf-live="01J9159C9FD358PD4A6E2960W8"></div>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactForm;
