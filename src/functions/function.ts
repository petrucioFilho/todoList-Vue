import { ref } from "vue";
export interface Item {
  id: number;
  message: string;
  description: string;
}
let idCount = ref(0);
export let textInput = ref("");
export let descriptionInput = ref("");

export let items = ref<Item[]>([]);

export function addMessage(text: string, description: string) {
  items.value.push({
    id: idCount.value,
    message: text,
    description: description,
  });
  textInput.value = "";
  descriptionInput.value = "";
  idCount.value++;
  console.log(items.value);
}

export function removeMessage(id: number) {
  items.value = items.value.filter((item) => item.id !== id);
}

export function updateMessage(text: string, description: string, id: number) {
  items.value[id].message = text;
  items.value[id].description = description;

  console.log(items.value);
}
