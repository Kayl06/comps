import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-500 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-gray-200 rounded-xl shadow-md">I'm a modal</div>
    </div>,
    
    document.querySelector('.modal-container')
  );
}

export default Modal;
