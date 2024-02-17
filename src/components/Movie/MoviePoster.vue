<template>
  <div class="movie__poster">
    <img class="movie__poster-img" :src="imagePath">
  </div>
</template>

<script setup>
defineProps({imagePath: String})
</script>
