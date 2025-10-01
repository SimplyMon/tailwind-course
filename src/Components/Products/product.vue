<template>
  <br />
  <ul class="list-group">
    <li class="list-group-item" v-for="product in products">
      <router-link
        :to="{
          name: 'productD',
          params: { productId: product.Id, productName: product.name },
        }"
      >
        {{ product.name }}
      </router-link>
    </li>
  </ul>
  <br />
</template>

<script setup>
const products = [
  {
    Id: 1,
    name: "Hatdog",
  },
  {
    Id: 2,
    name: "Biryani",
  },
  {
    Id: 3,
    name: "Chicken",
  },
];
</script>
