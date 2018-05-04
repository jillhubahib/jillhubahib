import React, { Component } from 'react'
import { FaTag } from 'react-icons/lib/fa'
import ReactModal from 'react-modal'
import { string, func, bool } from 'prop-types'

const PortfolioItemModal = props => {
  const {
    showModal,
    handleCloseModal,
    tags,
    name,
    repository,
    thumbnails,
    description,
  } = props

  const modalStyle = {
    overlay: {
      position: `fixed`,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: `rgba(0, 0, 0, 0.75)`,
      zIndex: 1043,
    },
    content: {
      border: 'none',
      padding: 0,
    },
  }

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Minimal Modal Example"
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      style={modalStyle}
    >
      {thumbnails && (
        <img
          className="scale-with-grid"
          src={thumbnails[0].file.url}
          alt={name}
        />
      )}

      <div className="description-box">
        <h4>{name}</h4>
        {description && (
          <p
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
        )}
        <span className="categories">
          <FaTag /> {tags}
        </span>
      </div>

      <div className="link-box">
        <a href={repository}>Details</a>
        <a onClick={handleCloseModal} className="ReactModal__Content-dismiss">
          Close
        </a>
      </div>
    </ReactModal>
  )
}

PortfolioItemModal.propTypes = {
  showModal: bool.isRequired,
  handleCloseModal: func.isRequired,
  name: string.isRequired,
  tags: string.isRequired,
  repository: string.isRequired,
}

export default PortfolioItemModal
