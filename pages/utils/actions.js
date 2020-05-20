import axios from 'axios';
import BASE_URL from './constants';
import Router from "next/router";
import cookie from 'cookie';

function parseCookies (req){
    return cookie.parse(req ? req.headers.cookie || "": document.cookie);
}

function logInfo (payload) {

  axios.post(`${BASE_URL}/api/statistics/`, JSON.stringify(payload))
    .then((response) => {
      console.log(response.data);
      Router.push('/scheduling');      
    })
    .catch((err) => err);
};

export { logInfo, parseCookies };
