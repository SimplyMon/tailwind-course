<template>
  <div>
    <h1>HELLO THIS IS THE GAME</h1>

    <div v-for="item in gameStore.counts" :key="item.id">
      <p>Count: {{ item.count }}</p>
      <button @click="gameStore.decrementCount(item.id)">-</button>
      <button @click="gameStore.incrementCount(item.id)">+</button>
    </div>
  </div>
</template> 

<script setup>
import { onMounted } from "vue";
import { useGameStore } from "@/store/gameStore";

const gameStore = useGameStore();

onMounted(() => {
  gameStore.fetchCounts();
});
</script>
    \