import axios from 'axios';
import BASE_URL from './constants';
import Router from "next/router";


const logInfo = (payload) => {
//   return axios({
//     method: 'post',
//     headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//     url: `${BASE_URL}/api/log`,
//     data: JSON.stringify(payload)
//   })
//     .then((response) => {
      Router.push('/scheduling');
    // })
    // .catch((err) => err);
};

export { logInfo };
