// NPM Packages
import ReactDOM from "react-dom";

export default function Modal({ state }) {
  const [child, setChild] = state;

  // safeguard
  if (child === null) return null;


  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={() => setChild(null)}>
          X
        </button>
        {child}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
