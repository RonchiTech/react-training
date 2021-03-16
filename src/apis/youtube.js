import axios from 'axios'
const KEY = 'AIzaSyBCqxJhrHD5KJNy1VBb6_mCYQ_Dt9W3u7s';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
