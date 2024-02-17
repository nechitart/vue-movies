import axios from 'axios'
import {requestTmdb} from "@/scripts/tmdbRequest";

export async function requestMovie(id) {
    const url = '/movie/' + id;
    return requestTmdb(url);
}
