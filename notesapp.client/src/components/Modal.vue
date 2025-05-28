<template>
  <div
    v-if="props.show"
    class="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-50"
  >
    <div class="bg-white bg-opacity-90 p-6 rounded-lg shadow-md relative w-lg">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl mb-2">{{ props.title }}</h1>
      </div>
      <slot></slot>

      <div class="flex justify-end items-center gap-2 mt-4">
        <button
          @click="emit('close')"
          type="button"
          class="py-2.5 px-5 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Cancel
        </button>
        <button
          @click="emit('submit')"
          type="button"
          class="text-white cursor-pointer bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  show: boolean;
}>();
const emit = defineEmits<{
  close: [];
  submit: [];
}>();
</script>
