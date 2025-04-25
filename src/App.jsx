import { useState, useEffect } from 'react';
import { fetchUnsplashWithTopic } from './articles-api.js';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

export default function App() {
  const [imageData, setimageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTopic, setSearchTopic] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    async function fetchUnsplash() {
      if (!searchTopic) {
        return;
      }
      try {
        setLoading(true);
        setError(false);
        const data = await fetchUnsplashWithTopic(searchTopic, page);
        if (data && data.length > 0) {
          setimageData((prevArticles) => [...prevArticles, ...data]);
        } else if (page === 1) {
          setimageData([]);
          setHasMore(false);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchUnsplash();
  }, [searchTopic, page]);

  const handleSearchSubmit = (topic) => {
    setSearchTopic(topic);
    setimageData([]);
    setPage(1);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster position="top-right" reverseOrder={false} />
      {loading && <ClipLoader size={35} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {imageData.length > 0 && (
        <ImageGallery items={imageData} onImageClick={handleImageClick} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onRequestClose={closeModal}
      />
      {imageData.length > 0 && hasMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}
