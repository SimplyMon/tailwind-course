<template>
  <div v-if="routes.params.productId && routes.params.productName">
    <h1>PRODUCT DETAILS</h1>

    <h2>Product Id:{{ routes.params.productId }}</h2>
    <h2>Product Name: {{ routes.params.productName }}</h2>
  </div>
  <div v-else>NO PRODUCT FOUND</div>
</template>

<script setup>
import { useRoute } from "vue-router";

const routes = useRoute();
console.log(routes.params);
</script>
