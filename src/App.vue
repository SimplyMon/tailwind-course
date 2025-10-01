<template>
  <div>
    <headerComponent></headerComponent>
    <router-view></router-view>
    <footerComponent></footerComponent>
  </div>
</template>

<script setup>
import homeComponent from "./Components/Home/home.vue";
import headerComponent from "./Components/Layout/header.vue";
import footerComponent from "./Components/Layout/footer.vue";
</script>
