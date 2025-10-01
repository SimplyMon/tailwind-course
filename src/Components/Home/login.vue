<template>
  <br />
  <div>
    <h1>Destination List</h1>

    <!-- Input Form -->
    <div>
      <input v-model="newDestination.name" placeholder="Destination Name" />
      <input
        v-model.number="newDestination.day"
        type="number"
        placeholder="Days"
      />
      <input
        v-model.number="newDestination.price"
        type="number"
        placeholder="Price (Pesos)"
      />
      <button @click="addDestination">Add Destination</button>
    </div>

    <br />

    <!-- Destination List -->
    <div>
      <ul>
        <li v-for="destination in destinations" :key="destination.id">
          <!-- Editing Mode -->
          <div v-if="editingId === destination.id">
            <input v-model="editDestination.name" placeholder="Name" />
            <input
              v-model.number="editDestination.day"
              type="number"
              placeholder="Days"
            />
            <input
              v-model.number="editDestination.price"
              type="number"
              placeholder="Price"
            />
            <button @click="updateDestination(destination.id)">Save</button>
            <button @click="cancelEdit">Cancel</button>
          </div>

          <!-- View Mode -->
          <div v-else>
            {{ destination.name }}
            <br />{{ destination.day }} days <br />{{ destination.price }} pesos
            <br />
            <button @click="startEdit(destination)">Edit</button>
            <button @click="deleteDestination(destination.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <br />
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

// Destination list
const destinations = ref([]);

// New destination input model
const newDestination = ref({
  name: "",
  day: null,
  price: null,
});

// Edit state
const editingId = ref(null);
const editDestination = ref({
  name: "",
  day: null,
  price: null,
});

// Fetch existing destinations
const fetchDestinations = () => {
  axios.get("http://localhost:3000/destination").then((response) => {
    destinations.value = response.data;
  });
};

// Add new destination
const addDestination = () => {
  if (
    !newDestination.value.name ||
    !newDestination.value.day ||
    !newDestination.value.price
  ) {
    alert("Please fill in all fields");
    return;
  }

  axios
    .post("http://localhost:3000/destination", newDestination.value)
    .then(() => {
      fetchDestinations();
      newDestination.value = { name: "", day: null, price: null };
    })
    .catch((error) => {
      console.error("Failed to add destination:", error);
    });
};

// Start editing a destination
const startEdit = (destination) => {
  editingId.value = destination.id;
  editDestination.value = { ...destination };
};

// Cancel edit
const cancelEdit = () => {
  editingId.value = null;
};

// Update destination
const updateDestination = (id) => {
  axios
    .put(`http://localhost:3000/destination/${id}`, editDestination.value)
    .then(() => {
      fetchDestinations();
      editingId.value = null;
    })
    .catch((error) => {
      console.error("Failed to update destination:", error);
    });
};

// Delete destination
const deleteDestination = (id) => {
  if (confirm("Are you sure you want to delete this destination?")) {
    axios
      .delete(`http://localhost:3000/destination/${id}`)
      .then(() => {
        fetchDestinations();
      })
      .catch((error) => {
        console.error("Failed to delete destination:", error);
      });
  }
};

// Initial fetch
fetchDestinations();
</script>
