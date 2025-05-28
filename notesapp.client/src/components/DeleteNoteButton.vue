<script lang="ts" setup>
import { ref } from "vue";
import Trash from "../assets/icons/Trash.vue";
import Modal from "./Modal.vue";

const emit = defineEmits<{
  delete: [id: string];
}>();

const props = defineProps<{
  id: string;
}>();

const isShowModal = ref(false);

function openModal() {
  isShowModal.value = true;
}

function closeModal() {
  isShowModal.value = false;
}

function handleSubmit() {
  emit("delete", props.id);

  isShowModal.value = false;
}
</script>

<template>
  <button
    @click="openModal"
    class="bg-red-700 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer"
  >
    <Trash />
  </button>

  <Modal
    title="Are you sure you want to delete this note?"
    :show="isShowModal"
    @submit="handleSubmit"
    @close="closeModal"
  >
  </Modal>
</template>
