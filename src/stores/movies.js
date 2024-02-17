import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
    state() {
        return {
            movies: {},
            currentPage: 1
        }
    },

    actions: {
        init (movies, page) {
            this.movies[page] = movies;
            this.currentPage = page;
        },

        getByPage(page) {
            const movies = this.movies[page] ?? null;
            if (movies) {
                this.currentPage = page;
            }

            return movies;
        }
    },

    getters: {
        currentMovies() {
            return this.movies[this.currentPage];
        }
    }
});
