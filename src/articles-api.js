import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const key = '4W6AI5a9su4aCfDQE5ACBxiBobYL9eC--QcZF52pibI';
export const fetchUnsplashWithTopic = async (topic, page = 1) => {
  if (topic && topic.trim() !== '') {
    try {
      const response = await axios.get(
        `/search/photos/?client_id=${key}&query=${topic}&per_page=12&page=${page}`,
      );
      return response.data.results;
    } catch (error) {
      console.error('Помилка при отриманні даних:', error);
      throw error;
    }
  } else {
    return [];
  }
};
