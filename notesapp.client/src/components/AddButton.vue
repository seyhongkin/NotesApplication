<script lang="ts" setup>
import { ref } from "vue";
import Plus from "../assets/icons/Plus.vue";
import Modal from "./Modal.vue";

const emit = defineEmits<{
  saved: [title: string, content: string];
}>();

const isShowModal = ref(false);
const error = ref("");

const title = ref("");
const content = ref("");

function showModal() {
  error.value = "";
  isShowModal.value = true;
}

function closeModal() {
  isShowModal.value = false;
}

function handleSubmit() {
  if (!title.value.trim()) {
    error.value = "Please give this note a title.";
    return;
  }

  emit("saved", title.value.trim(), content.value.trim());
  title.value = "";
  content.value = "";
  closeModal();
}
</script>

<template>
  <button
    @click="showModal"
    class="absolute right-4 bottom-4 z-[99] bg-gray-900 hover:bg-gray-700 text-white rounded-full p-3"
  >
    <Plus />
  </button>

  <Modal title="Create note" :show="isShowModal" @submit="handleSubmit" @close="closeModal">
    <div class="space-y-2">
      <div>
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900"
          >Title
          <span class="text-red-500">*</span>
        </label>
        <input
          v-model="title"
          @input="error = ''"
          type="text"
          id="title"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Title"
        />
        <small v-if="!!error" class="text-red-500">{{ error }}</small>
      </div>
      <div>
        <label for="content" class="block mb-2 text-sm font-medium text-gray-900">Content</label>
        <textarea
          v-model="content"
          id="content"
          rows="4"
          class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Say something..."
        ></textarea>
      </div>
    </div>
  </Modal>
</template>
