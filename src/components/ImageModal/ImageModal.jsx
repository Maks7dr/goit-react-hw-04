import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    width: '90vw',
    height: '90vh',
    border: 'none',
    backgroundColor: 'transparent',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

export default function ImageModal({ isOpen, onRequestClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.largeImage}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>
    </Modal>
  );
}
