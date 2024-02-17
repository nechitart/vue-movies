<template>
  <a @click="goToMovie" class="movie-card">
    <MoviePoster :image-path="movie.poster_path" />

    <MovieData :movie="movie"/>
  </a>

</template>

<script setup>
import MovieData from "@/components/MoviesList/MovieData.vue";
import MoviePoster from "@/components/MoviesList/MoviePoster.vue";
import router from "@/router";

const props = defineProps({movie: Object});

const goToMovie = () => {
  router.push({name: 'movies', params: {id: props.movie.id}});
};
</script>
