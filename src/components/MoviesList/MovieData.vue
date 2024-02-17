<template>
  <div class="movie-data">
    <CommonTitle :size="'small'">{{ movie.title }}</CommonTitle>

    <div class="movie-card__item release-date">
      Release date: <span>{{ movie.release_date }}</span>
    </div>

    <div class="movie-card__item original-language">
      Original language: <span>{{ movie.original_language }}</span>
    </div>

    <div class="movie-card__item rating">
      Rating: <span>{{ movie.vote_average.toFixed(1) }}</span>
    </div>

    <div class="movie-card__item votes-qty">
      Votes quantity: <span>{{ movie.vote_count }}</span>
    </div>
  </div>
</template>

<script setup>
import CommonTitle from "@/components/Common/CommonTitle.vue";

defineProps({movie: Object})
</script>
