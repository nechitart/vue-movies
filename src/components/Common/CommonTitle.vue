<template>
  <h1 class="title"
    :class="{
      'title_big': size === 'big',
      'title_medium': size === 'medium',
      'title_small': size === 'small'
    }">
    <slot />
  </h1>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'big'
  }
});
</script>

<style scoped>
.title {
  font-weight: 700;
  margin: 0 auto 1rem auto;
  color: #9d9999;
}

.title_big {
  font-size: 35px;
}

.title_medium {
  font-size: 30px;
}

.title_small {
  font-size: 25px;
  margin-bottom: .3rem;
}
</style>
