import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./Modal.css";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Submit your application</h2>
          <button className="modal-close">
            <IoCloseSharp size={20} onClick={handleOverlayClick} />
          </button>
        </div>
        <form>
          <main className="modal-content">
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Your name..."
            />
            <input
              className="form-input"
              type="text"
              name="phone"
              placeholder="Your phone..."
            />
            <textarea
              className="form-input"
              type="text"
              name="message"
              placeholder="Message..."
            />
            <button className="form-btn" type="submit">
              <span>Submit</span>
            </button>
          </main>
        </form>
      </div>
    </div>
  );
};

export default Modal;
