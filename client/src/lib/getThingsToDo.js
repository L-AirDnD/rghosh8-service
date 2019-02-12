import axios from 'axios';

const getThingsToDo = () => {
  return axios.get('/api/getThingsToDo');
};

export default getThingsToDo;


