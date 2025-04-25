import { useState } from 'react';
import Modal from 'react-modal';
import css from './ImageCard.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // maxWidth: '90%',
    // maxHeight: '90%',
    overflow: 'hidden',
    // overflow: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

export default function ImageCard({ newItem }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div key={newItem.id}>
      <img
        src={newItem.urls.small}
        alt={newItem.alt_description}
        onClick={openModal}
        className={css.smallImage}
        style={{ cursor: 'pointer' }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={`Зображення: ${newItem.alt_description}`}
      >
        <img
          src={newItem.urls.regular}
          alt={newItem.alt_description}
          className={css.largeImage}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'block',
            margin: '0 auto',
          }}
        />
        {newItem.alt_description && (
          <p className={css.description}>{newItem.alt_description}</p>
        )}
        <button onClick={closeModal} className={css.closeButton}>
          Close
        </button>
      </Modal>
    </div>
  );
}
