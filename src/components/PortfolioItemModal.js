import React, { Component } from 'react';
import { FaTag } from "react-icons/lib/fa";
import ReactModal from 'react-modal';

import CoffeeModal from "../assets/images/portfolio/modals/m-coffee.jpg";

const PortfolioItemModal = (props) => {
  const { showModal, handleCloseModal } = props;
  const modalStyle = {
    overlay: {
      position: `fixed`,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: `rgba(0, 0, 0, 0.75)`,
    },
    content: {
      border: 'none',
      padding: 0,
      overflow: 'visible'
    }
  };

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Minimal Modal Example"
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={modalStyle}
    >
      <img
        className="scale-with-grid"
        src={CoffeeModal}
        alt=""
      />

      <div className="description-box">
        <h4>Coffee Cup</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <FaTag /> Branding, Webdesign
        </span>
      </div>

      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a onClick={handleCloseModal} className="ReactModal__Content-dismiss">Close</a>
      </div>
    </ReactModal>
  );
}

export default PortfolioItemModal;