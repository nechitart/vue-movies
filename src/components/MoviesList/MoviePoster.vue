<template>
  <div class="movie-card__poster">
    <img class="movie-card__poster-img" :src="imageUrl + imagePath">
  </div>
</template>

<script setup>
defineProps({imagePath: String})

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;
</script>
