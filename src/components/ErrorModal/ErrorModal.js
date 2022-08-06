import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ErrorModal({ errorText }) {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{errorText}</p>
      </Modal.Body>
    </Modal.Dialog>
  );
}
