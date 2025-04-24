// import { useState } from 'react';
import { fetchArticlesWithTopic } from './articles-api.js';
import './App.css';
import ArticleList from './components/others/ArticleList/ArticleList .jsx';
import { SearchForm } from './components/others/SearchForm/SearchForm.jsx';

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

export default App;
