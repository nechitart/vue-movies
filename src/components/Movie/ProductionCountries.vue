<template>
  <div class="movie__item prod-countries">
    Production countries: <span>{{ countriesString }}</span>
  </div>
</template>

<script setup>
const props = defineProps({countries: Array});
const countryNames = props.countries.map(item => item.name);
const countriesString = countryNames.join(', ');
</script>
