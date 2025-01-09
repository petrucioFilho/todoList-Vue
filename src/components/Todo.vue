<script setup lang="ts">
import { removeMessage, type Item } from "../functions/function";
defineProps<{ item: Item }>();
</script>
<template>
  <!-- <div class="d-flex"> -->
  <div class="d-flex bg-light border rounded my-2 px-2 flex-row flex-fill p-0">
    <div class="card-body d-flex flex-row align-items-center">
      <div>
        <span>
          {{ item.id }}
        </span>
      </div>
      <div class="flex-grow-1">
        <h5 class="mt-2">{{ item.message }}</h5>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <RouterLink :to="{ name: 'TodoUpdate', params: { id: item.id } }">
        <button type="button" class="btn btn-secondary me-2">
          <i class="bi bi-pencil-square"></i>
        </button>
      </RouterLink>

      <button
        @click="removeMessage(item.id)"
        type="button"
        class="btn btn-danger"
      >
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>
