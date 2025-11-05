import Search from "./Search";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onclose} />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-lg mx-4 p-6 z-10 h-30 max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <Search />
        {children}
      </div>
    </div>
  );
};

export default Modal;
