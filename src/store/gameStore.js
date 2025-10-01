import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useGameStore = defineStore("gameStore", () => {
  // State
  const counts = ref([]); // Array of { id, count }

  // Actions
  const fetchCounts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/game");
      counts.value = response.data;
    } catch (error) {
      console.error("Failed to fetch counts:", error);
    }
  };

  const incrementCount = (id) => {
    const item = counts.value.find((c) => c.id === id);
    if (item) {
      item.count++;
    }
  };

  const decrementCount = (id) => {
    const item = counts.value.find((c) => c.id === id);
    if (item && item.count > 0) {
      item.count--;
    }
  };

  // Return everything you want to expose
  return {
    counts,
    fetchCounts,
    incrementCount,
    decrementCount,
  };
});
