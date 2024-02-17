<template>
  <div class="movie-list">
    <MovieCard
        v-for="movie in movies"
        :movie="movie"
    />
  </div>
</template>

<script setup>
import MovieCard from "@/components/MoviesList/MovieCard.vue";

defineProps({movies: Array});
</script>
