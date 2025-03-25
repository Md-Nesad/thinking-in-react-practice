import React, { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOverlayClick(event) {
    // Close modal if user clicks directly on the overlay (not the modal itself)
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={handleOverlayClick} // Detect outside click
        >
          <div>
            <h1>
              this is modal
              <p>this is modal description</p>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
