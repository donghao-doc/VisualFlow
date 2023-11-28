<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from '@/components/AppNav.vue'
</script>

<template>
  <div class="app-wrapper">
    <header>
      <app-nav />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
}

main {
  height: calc(100% - 48px);
}
</style>
