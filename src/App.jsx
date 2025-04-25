import { useState, useEffect } from 'react';
import { fetchArticlesWithTopic } from './articles-api.js';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTopic, setSearchTopic] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      if (!searchTopic) {
        return;
      }
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticlesWithTopic(searchTopic, page);
        if (data && data.length > 0) {
          setArticles((prevArticles) => [...prevArticles, ...data]);
        } else if (page === 1) {
          setArticles([]);
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

    fetchArticles();
  }, [searchTopic, page]);

  const handleSearchSubmit = (topic) => {
    setSearchTopic(topic);
    setArticles([]);
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
      {articles.length > 0 && <ImageGallery items={articles} />}
      {articles.length > 0 && hasMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}
