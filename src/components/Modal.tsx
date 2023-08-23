import React, { useState } from "react";
import type { Project } from "./utils/types";

export default function Modal ({ project }: {project: Project})  {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-container">
        <div className="modal-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* Add additional details here */}
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
      <div className="modal-overlay" onClick={closeModal} />
    </div>
  ) : (
    <div className="project-card" onClick={openModal}>
      <div className="card-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};


