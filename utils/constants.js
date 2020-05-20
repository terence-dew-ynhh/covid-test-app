import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { PORT } = 3000;

const BASE_URL = `http://localhost:3000`;

export default BASE_URL;