import axios from 'axios'
import {requestTmdb} from "@/scripts/tmdbRequest";

export async function requestPlayingMovies(page = 1) {
    if (!page) {
        page = 1;
    }

    return requestTmdb('/movie/now_playing', { page });
}
