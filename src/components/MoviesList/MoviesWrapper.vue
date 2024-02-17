<template>

  <MovieList :movies="loading ? [] : store.currentMovies.results" v-show="!loading"/>

  <div v-if="loading" class="container" style="display: flex; justify-content: center">
    <CommonLoader />
  </div>

  <CommonPagination
      :current-page="page"
      :items-per-page="20"
      :shown-pages="10"
      :total-items="store.currentMovies.total_results"
      :click-handler="paginationHandler"
  />
</template>

<script async setup>
import CommonPagination from "@/components/Common/CommonPagination.vue";
import MovieList from "@/components/MoviesList/MovieList.vue";
import { useMoviesStore } from "@/stores/movies";
import { watch, ref } from "vue";
import { requestPopularMovies } from "@/scripts/popularMoviesRequest";
import router from "@/router";
import CommonLoader from "@/components/Common/CommonLoader.vue";

const store = useMoviesStore();

const props = defineProps({pageUrl: String});

const loading = ref(true);
const page = ref(0);
if (store.currentPage) {
  page.value = store.currentPage;
  loading.value = false;
}

watch(page, async newPage => {
  loading.value = true;
  const currentMovies = store.getByPage(newPage);
  if (currentMovies) {
    loading.value = false;
    return;
  }

  const movieItems = await requestPopularMovies(newPage);
  store.init(movieItems.data, newPage);
  page.value = newPage;
  loading.value = false;
});

const paginationHandler = newPage => {
  loading.value = true;
  store.currentPage = newPage;
  page.value = newPage;
  router.push({name: props.pageUrl, params: {page: page.value}});
};
</script>
