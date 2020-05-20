import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { PORT } = 3015;

const BASE_URL = `http://localhost:3015`;

export default BASE_URL;