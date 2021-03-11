import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID zcTFLbTj8fTX5GOwbaFycet5K_tlqPI0KR50aLWk_nw',
  },
});
