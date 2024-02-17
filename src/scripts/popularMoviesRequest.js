import axios from 'axios'
import { requestTmdb } from "@/scripts/tmdbRequest";

export async function requestPopularMovies(page = 1) {
    if (!page) {
        page = 1;
    }

    return requestTmdb('/movie/popular', { page });
}
