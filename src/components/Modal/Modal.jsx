
import { useEffect} from 'react';
import { createPortal } from "react-dom";

import styles from "./modal.module.css"


const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, close }) => {
  const closeModal = (event) => {
    if (event.target === event.currentTarget || event.code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [close]);

    return createPortal(
      (<div className={styles.overlay} onClick={closeModal}>
          <div className={styles.modal} >                    
              {children}
          </div>
      </div>),
  modalRoot)
};

export default Modal;