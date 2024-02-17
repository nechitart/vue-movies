<template>
  <div class="movie-overview">
    <CommonTitle
        :size="'small'"
    >
      Overview
    </CommonTitle>

    <div class="movie-overview__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import CommonTitle from "@/components/Common/CommonTitle.vue";
</script>
