import axios from 'axios';
import BASE_URL from './constants';
import Router from 'next/router'
import cookie from 'cookie';

function parseCookies (req){
    return cookie.parse(req ? req.headers.cookie || "": document.cookie);
}

function logInfo (payload) {
  axios.post(`/api/log`, payload)
    .then((response) => {
      // console.log(response.data);      
    })
    .catch((err) => err);

    Router.push('/scheduling');  
    
};

export { logInfo, parseCookies };
