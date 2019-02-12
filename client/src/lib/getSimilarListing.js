import axios from 'axios';

const getSimilarListing = () => {
  return axios.get('/api/getSimilarListing');
};

export default getSimilarListing;
