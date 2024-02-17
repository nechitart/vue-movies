<template>
  <Teleport to="body">
    <HeaderWrapper :links="links"/>
  </Teleport>

  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderWrapper from "@/components/Header/HeaderWrapper.vue";

const links = [
  {
    id: 1,
    path: '/',
    title: 'Home'
  },
  {
    id: 2,
    path: '/popular-movies',
    title: 'Popular'
  },
  {
    id: 3,
    path: '/playing-movies',
    title: 'Now playing'
  }
];
</script>
