export default function ImageCard({ newItem }) {
  return (
    <div key={newItem.id}>
      <img src={newItem.urls.small} alt={newItem.alt_description} />
    </div>
  );
}
