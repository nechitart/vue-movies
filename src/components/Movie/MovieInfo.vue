<template>
  <div class="movie__info">
    <CommonTitle>{{ title }}</CommonTitle>

    <MovieGenres :genres="genres" />
    <div class="movie__item release-date">
      Release date: <span>{{ movieData.release_date }}</span>
    </div>

    <div class="movie__item runtime">
      Runtime: <span>{{ hours }}h {{ mins }}m</span>
    </div>

    <div class="movie__item original-language">
      Original language: <span>{{ movieData.original_language }}</span>
    </div>

    <ProductionCountries :countries="movieData.production_countries" />
    <OverView>{{ movieData.overview }}</OverView>
  </div>
</template>
countriesString =
<script setup>
import MovieGenres from "@/components/Movie/MovieGenres.vue";
import CommonTitle from "@/components/Common/CommonTitle.vue";
import ProductionCountries from "@/components/Movie/ProductionCountries.vue";
import OverView from "@/components/Movie/OverView.vue";

const props = defineProps({movieData: Object});

const title = props.movieData.original_title;
const genres = props.movieData.genres;

const hours = Math.floor(props.movieData.runtime / 60);
const mins = props.movieData.runtime % 60;
</script>
