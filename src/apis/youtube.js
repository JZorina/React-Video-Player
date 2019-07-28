import axios from 'axios';

const KEY='AIzaSyAhLJORogrjSkxkx18TJM0hh3_GPOpb8qE';

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }

});