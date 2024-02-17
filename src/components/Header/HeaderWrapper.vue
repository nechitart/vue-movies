<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <NavWrapper :links="links"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavWrapper from "@/components/Navigation/NavWrapper.vue";

defineProps({links: Array})
</script>
