import { useState, useEffect } from 'react';
import { fetchArticlesWithTopic } from './articles-api.js';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTopic, setSearchTopic] = useState('');

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticlesWithTopic(searchTopic);
        setArticles(data);
      } catch (error) {
        setError(true);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [searchTopic]);

  const handleSearchSubmit = (topic) => {
    setSearchTopic(topic);
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
    </>
  );
}
