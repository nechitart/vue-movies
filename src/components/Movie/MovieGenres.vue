<template>
  <div class="genres">
    <TagItem v-for="genre in genres" key="genre.id">
      {{ genre.name }}
    </TagItem>
  </div>
</template>

<script setup>
import TagItem from "@/components/Common/TagItem.vue";

// TODO: ability to go to the genres page

defineProps({genres: Array})
</script>
