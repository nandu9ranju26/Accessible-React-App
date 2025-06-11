// src/components/Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button onClick={onClose} className="close-btn" aria-label="Close Modal">X</button>
        <h2>Accessibility Information</h2>
        <p>This app demonstrates accessible modal and list rendering.</p>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
