<script setup lang="ts">


import { useFiltersStore } from "@/stores/filters";

const f = useFiltersStore()
f.fill()
</script>

<template>
  <h1>{{ header }}</h1>
  <form @submit.prevent="saveItems" class="add-item-form">
    <input type="text" v-model="newItem" />
    <label for="">
      <input type="checkbox" v-model="newItemHighPriority" />
      High Priority
    </label>
    <button class="btn btn-primary">Save Item</button>
  </form>
  {{ characterCount }}
  <ul>
    <li v-for="({ id, label, highPriority }, index) in items" :key="id">
      {{ index }} {{ label }} {{ highPriority ? "Wazne" : "" }}
    </li>
  </ul>
</template>

<style scoped>

</style>
