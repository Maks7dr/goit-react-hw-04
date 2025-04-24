import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchArticlesWithTopic = async (topic) => {
  const response = await axios.get(
    `/search/photos/?client_id=4W6AI5a9su4aCfDQE5ACBxiBobYL9eC--QcZF52pibI&query=${topic}&per_page=12`,
  );
  console.log(response.data.results);
  return response.data.results;
};
