<script setup lang="ts">
import Todo from "../components/Todo.vue";
import {
  items,
  addMessage,
  textInput,
  descriptionInput,
} from "../functions/function";
</script>
<template>
  <div class="d-block">
    <h1 class="text-light">Todo List</h1>
  </div>

  <div class="d-flex flex-fill d-block">
    <div class="d-flex flex-row flex-fill">
      <div class="me-2">
        <span class="text-light">Titulo</span>
        <input
          v-model="textInput"
          type="text"
          class="form-control m-0"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div class="flex-fill me-2 flex-grow-1">
        <span class="text-light">Descrição</span>
        <input
          v-model="descriptionInput"
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
    </div>
    <div class="d-flex align-items-end">
      <button
        type="button"
        class="btn btn-success"
        @click="addMessage(textInput, descriptionInput)"
      >
        <i class="bi bi-plus-lg"></i>
      </button>
    </div>
  </div>
  <div class="d-block">
    <div v-if="items.length > 0">
      <div v-for="item in items">
        <Todo :item="item" />
      </div>
    </div>
    <div v-else>
      <div class="p-5">
        <h2 class="text-light">Nenhuma Atividade cadastrada</h2>
      </div>
    </div>
  </div>
</template>
