<template>
  <VueAwesomePaginate
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :max-pages-shown="shownPages"
      :current-page="currentPage"
      :on-click="clickHandler"
      v-model="model"
  />
</template>

<script setup>
import { VueAwesomePaginate } from "vue-awesome-paginate";

const props = defineProps({
  totalItems: Number,
  currentPage: Number,
  itemsPerPage: Number,
  shownPages: Number,
  clickHandler: Function
});

const model = props.currentPage;
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;

  margin-top: 2rem;
  margin-bottom: 2rem;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #4d4c4c;
  border: 1px solid rgb(93, 92, 92);
  color: #c4c4c4;
}
.paginate-buttons:hover {
  background-color: #cbcbcb;
  color: #5b5b5b;
}
.active-page {
  background-color: #265030;
  border: 1px solid #299432;
  color: #b2b2b2;
}
.active-page:hover {
  background-color: #418547;
}
</style>
