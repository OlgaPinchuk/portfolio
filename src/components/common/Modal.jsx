//NPM packages
import ReactDOM from "react-dom";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
