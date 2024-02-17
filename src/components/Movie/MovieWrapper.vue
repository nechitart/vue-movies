<template>
  <div class="movie">
    <div class="container">
      <div class="movie__inner">
        <div class="movie__common">
          <MoviePoster :image-path="imagePath" />

          <MovieInfo :movie-data="movie"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script async setup>
import MoviePoster from "@/components/Movie/MoviePoster.vue";
import MovieInfo from "@/components/Movie/MovieInfo.vue";

const props = defineProps({movie: Object});

const imagePath = import.meta.env.VITE_TMDB_IMAGE_URL + props.movie.poster_path;
</script>
