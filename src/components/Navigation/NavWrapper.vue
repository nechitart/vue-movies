<template>
  <nav class="nav">
    <RouterLink
        v-for="link in links"
        v-bind:to="link.path"
        :key="link.id"
        style="margin-right: 1rem;"
    >
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({links: Array})

</script>
