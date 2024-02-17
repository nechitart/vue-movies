<template>
  <Suspense>
    <MovieWrapper :movie="movieData" />
  </Suspense>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {requestMovie} from "@/scripts/movieRequest";
import MovieWrapper from "@/components/Movie/MovieWrapper.vue";

const route = useRoute();
const movieResponse = await requestMovie(route.params.id);
const movieData = movieResponse.data;
</script>
