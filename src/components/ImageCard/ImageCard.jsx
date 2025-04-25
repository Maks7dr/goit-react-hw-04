import css from './ImageCard.module.css';

export default function ImageCard({ newItem, onClick }) {
  return (
    <div key={newItem.id} onClick={() => onClick(newItem)}>
      <img
        src={newItem.urls.small}
        alt={newItem.alt_description}
        className={css.smallImage}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
