<template>
  <div class="container">
    <CommonTitle>Popular</CommonTitle>

    <MoviesWrapper />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { requestPopularMovies } from "@/scripts/popularMoviesRequest";
import MoviesWrapper from "@/components/MoviesList/MoviesWrapper.vue";
import CommonTitle from "@/components/Common/CommonTitle.vue";
import { useMoviesStore } from "@/stores/movies";

const route = useRoute();
const moviesStore = useMoviesStore();
const movies = await requestPopularMovies(route.params.page ?? 1);
const moviesData = movies.data;

moviesStore.init(moviesData, moviesData.page);
</script>
