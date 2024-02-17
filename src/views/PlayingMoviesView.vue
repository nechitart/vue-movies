<template>
  <div class="container">
    <CommonTitle>Now playing</CommonTitle>

    <MoviesWrapper />
  </div>
</template>

<script setup>
import MoviesWrapper from "@/components/MoviesList/MoviesWrapper.vue";
import CommonTitle from "@/components/Common/CommonTitle.vue";
import { useRoute } from "vue-router";
import { requestPlayingMovies } from "@/scripts/nowPlayingMoviesRequest";
import { useMoviesStore } from "@/stores/movies";

const moviesStore = useMoviesStore();
const route = useRoute();
const moviesResponse = await requestPlayingMovies(route.params.page ?? 1);
const moviesData = moviesResponse.data;

moviesStore.init(moviesData, moviesData.page);
</script>
