<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits<{
  changeSort: [isDesc: boolean];
}>();

const isDesc = ref(true);

function toggleDesc() {
  isDesc.value = !isDesc.value;
  emit("changeSort", isDesc.value);
}
</script>

<template>
  <button
    @click="toggleDesc"
    type="button"
    class="flex gap-2 items-center cursor-pointer p-2.5 ms-2 text-sm font-medium text-white bg-orange-500 rounded-lg border border-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
  >
    <svg
      v-if="isDesc"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>

    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
      />
    </svg>
  </button>
</template>
