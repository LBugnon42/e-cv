<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/HeaderLangues.vue"
import Footer from "@/components/FooterMain.vue"
</script>

<template>
  <Header></Header>

  <RouterView />

  <Footer></Footer>
</template>

<style scoped>


</style>
