import axios from 'axios'

const token = import.meta.env.VITE_TMDB_KEY;

export async function requestTmdb(url, params = null) {
    const fullUrl = import.meta.env.VITE_TMDB_BASE_URL + url;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    if (params) {
        config.params = params;
    }

    return axios.get(fullUrl, config);
}
