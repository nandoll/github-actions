import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export const Popup = (props) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { text, classes, children } = props;

  return (
    <div>
      <button className={`${classes}`} onClick={onOpenModal}>
        {text}
      </button>

      <Modal open={open} onClose={onCloseModal} center>
        {children}
      </Modal>
    </div>
  );
};
