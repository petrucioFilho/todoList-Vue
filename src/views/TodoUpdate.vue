<script setup lang="ts">
import { RouterLink } from "vue-router";
import { items, updateMessage, type Item } from "../functions/function";
import { ref, defineProps, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{ id: number }>();
let data = ref<Item | undefined>(undefined);
let titleUpdate = ref("");
let descriptionUpdate = ref("");
const router = useRouter();
onBeforeMount(() => {
  console.log(props.id);
  data.value = items.value.find((item) => item.id == props.id);
  if (data.value) {
    console.log(data.value);
    titleUpdate.value = data.value.message;
    descriptionUpdate.value = data.value.description;
  }
  console.log(data.value);
  console.log(items.value);
});

function updateMessage2(title: string, description: string, id: number) {
  updateMessage(title, description, id);
  router.push("/");
}
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div>
      <RouterLink to="/" class="">
        <h1 class="text-light">Todo List</h1>
      </RouterLink>
    </div>

    <div class="d-flex flex-column border rounded p-4 w-50 flex-fill">
      <div class="me-2">
        <span class="text-light">Titulo</span>
        <input
          v-model="titleUpdate"
          type="text"
          class="form-control m-0"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div class="me-2">
        <span class="text-light">Descrição</span>
        <input
          v-model="descriptionUpdate"
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div class="mt-2 d-flex justify-content-between">
        <RouterLink to="/" class="">
          <button class="btn btn-success">Voltar</button>
        </RouterLink>
        <button
          class="btn btn-success"
          @click="updateMessage2(titleUpdate, descriptionUpdate, props.id)"
        >
          Atualizar
        </button>
      </div>
    </div>
  </div>
</template>
